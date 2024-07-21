import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  dataSource = new MatTableDataSource<EstudioElement>([]);
  universidad: string = '';
  carrera: string = '';
  generacion: Date | null = null;
  fechaIni: Date | null = null;
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;
  fechaActual: Date = new Date();

  displayedColumns = ['universidad', 'carrera', 'fechaIni', 'generacion', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });
  }

  ngOnInit(): void { }

  guardarEstudio(form: NgForm): void {
    if (this.universidad && this.carrera && this.generacion && this.fechaIni) {
      const nuevaExperiencia: EstudioElement = {
        universidad: this.universidad,
        carrera: this.carrera,
        generacion: this.generacion,
        fechaIni: this.fechaIni
      };

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data];

      this.dataFormularioService.guardarEstudios(this.dataSource.data);
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
    this.universidad = '';
    this.carrera = '';
    this.generacion = null;
    this.fechaIni = null;
    form.resetForm();
  }

  eliminarElemento(elemento: EstudioElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.dataFormularioService.guardarEstudios(this.dataSource.data);
  }

  setFechaActual() {
    this.generacion = this.fechaActual;
  }
}

export interface EstudioElement {
  universidad: string;
  carrera: string;
  fechaIni: Date;
  generacion: Date;
}
