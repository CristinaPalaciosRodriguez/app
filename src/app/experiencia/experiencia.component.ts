import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { PeriodicElement } from '../models/experiencias.interface';
import { Logro } from '../models/logro.interface';
import { Funcion } from '../models/funcion.interface';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  puesto: string = '';
  empresa: string = '';
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  actividades: string[] = [];
  funciones: string[] = [];
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;
  fechaActual: Date = new Date();
  displayedColumns = ['empresa', 'puesto', 'fechaIni', 'fechaFin', 'actividades', 'funciones', 'eliminar'];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  visibleFun = true;
  selectableFun = true;
  removableFun = true;
  addOnBlurFun = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  logros: Logro[] = [];
  funcionesArray: Funcion[] = [];

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });
  }

  ngOnInit(): void {
    console.log('displayedColumns:', this.displayedColumns);
    console.log('dataSource.data:', this.dataSource.data);
  }

  guardarExperiencia(form: NgForm): void {
    if (this.puesto && this.empresa && this.fechaInicio && this.fechaFin && this.logros.length !== 0 && this.funcionesArray.length !== 0) {
      const nuevaExperiencia: PeriodicElement = {
        puesto: this.puesto,
        empresa: this.empresa,
        fechaIni: this.fechaInicio,
        fechaFin: this.fechaFin,
        actividades: this.actividades,
        funciones: this.funciones
      };

      console.log('Nuevo elemento a agregar:', nuevaExperiencia);

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data];

      console.log('dataSource.data después de agregar:', this.dataSource.data);
      this.dataFormularioService.guardarExperiencias(this.dataSource.data);
      this.resetFormulario(form);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos obligatorios.',
      });
    }
  }

  resetFormulario(form: NgForm): void {
    this.puesto = '';
    this.empresa = '';
    this.fechaInicio = null;
    this.fechaFin = null;
    this.actividades = [];
    this.funciones = [];
    this.logros = [];
    this.funcionesArray = [];
    form.resetForm();
  }

  eliminarElemento(elemento: PeriodicElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.dataFormularioService.guardarExperiencias(this.dataSource.data);
  }

  setFechaActual() {
    this.fechaFin = this.fechaActual;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.logros.push({ nombreLogro: value.trim() });
      this.actividades.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(logro: Logro): void {
    const index = this.logros.indexOf(logro);

    if (index >= 0) {
      this.logros.splice(index, 1);
      this.actividades.splice(index, 1);
    }
  }

  addFunciones(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.funcionesArray.push({ nombreFuncion: value.trim() });
      this.funciones.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeFunciones(funcion: Funcion): void {
    const index = this.funcionesArray.indexOf(funcion);

    if (index >= 0) {
      this.funcionesArray.splice(index, 1);
      this.funciones.splice(index, 1);
    }
  }
}
