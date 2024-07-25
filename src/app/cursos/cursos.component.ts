import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { CursoElement } from '../models/cursos.interface';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dataSource = new MatTableDataSource<CursoElement>([]);
  nombre: string = '';
  organizacion: string = '';
  fechaIni: Date | null = null;
  fechaFin: Date | null = null;
  descripcion: string = '';
  entidad: string = '';
  tiempoEstudio: string = '';
  tiempoEspecifica: string = '';
  tiempoNum: number = 1;
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;
  fechaActual: Date = new Date();

  displayedColumns = ['nombre', 'organizacion', 'fechaIni', 'fechaFin', 'descripcion', 'entidad', 'tiempoEstudio', 'eliminar'];

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

  guardarCurso(form: NgForm): void {
    if (this.nombre && this.organizacion && this.fechaIni && this.fechaFin && this.descripcion && this.entidad && this.tiempoEspecifica && this.tiempoNum) {
      const nuevoCurso: CursoElement = {
        nombre: this.nombre,
        organizacion: this.organizacion,
        fechaIni: this.fechaIni,
        fechaFin: this.fechaFin,
        descripcion: this.descripcion,
        entidad: this.entidad,
        tiempoEstudio: this.tiempoNum + ' ' + this.tiempoEspecifica,
      };

      console.log('Nuevo elemento a agregar:', nuevoCurso);

      this.dataSource.data.push(nuevoCurso);
      this.dataSource.data = [...this.dataSource.data];

      this.dataFormularioService.guardarCursos(this.dataSource.data);
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
    this.nombre = '';
    this.organizacion = '';
    this.fechaIni = null;
    this.fechaFin = null;
    this.descripcion = '';
    this.entidad = '';
    this.tiempoEspecifica = '';
    this.tiempoNum = 1;
    form.resetForm();
  }

  eliminarElemento(elemento: CursoElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.dataFormularioService.guardarCursos(this.dataSource.data);
  }
}
