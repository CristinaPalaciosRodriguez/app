import { Injectable } from '@angular/core';
// @ts-ignore
import * as Print from '../assets/js/print.js';
import { EstudioElement } from './models/estudios.interface';
import { PeriodicElement } from './models/experiencias.interface';
import { ConocimientoElement } from './models/conocimientos.interface';
import { IdiomasElement } from './models/idiomas.interface';
import { CursoElement } from './models/cursos.interface';
import { LanguageService } from './language.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFormularioService {
  nombre: string = '';
  comentarios: string = '';
  apellidos: string = '';
  nacionalidad: string = '';
  edad: number = 18;
  ciudad: string = '';
  pais: string = '';
  estudios: EstudioElement[] = [];
  conocimientos: ConocimientoElement[] = [];
  experiencias: PeriodicElement[] = [];
  cursos: CursoElement[] = [];
  idiomas: IdiomasElement[] = [];

  // Variables para indicar si los arreglos tienen elementos
  tieneEstudios: boolean = false;
  tieneConocimientos: boolean = false;
  tieneExperiencias: boolean = false;
  tieneCursos: boolean = false;
  tieneIdiomas: boolean = false;

  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;

  constructor(private languageService: LanguageService) { 
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });
  }

  guardarDatos(comentarios: string, estilo: string) {
    this.comentarios = comentarios;
    this.actualizarEstadoArreglos();
    Print.printDiv2(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.estudios, this.conocimientos,
      this.experiencias, this.cursos, this.idiomas, this.languageTexts);
  }

  guardarPersonal(nombre: string, apellidos: string, nacionalidad: string, edad: number, ciudad: string, pais: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nacionalidad = nacionalidad;
    this.edad = edad;
    this.ciudad = ciudad;
    this.pais = pais;
    this.actualizarEstadoArreglos();
  }

  guardarEstudios(estudios: EstudioElement[]) {
    this.estudios = estudios;
    this.actualizarEstadoArreglos();
  }

  guardarConocimientos(conocimientos: ConocimientoElement[]) {
    this.conocimientos = conocimientos;
    this.actualizarEstadoArreglos();
  }

  guardarIdioma(idiomas: IdiomasElement[]) {
    this.idiomas = idiomas;
    this.actualizarEstadoArreglos();
  }

  guardarExperiencias(experiencias: PeriodicElement[]) {
    this.experiencias = experiencias;
    this.actualizarEstadoArreglos();
  }

  guardarCursos(cursos: CursoElement[]) {
    this.cursos = cursos;
    this.actualizarEstadoArreglos();
  }

  private actualizarEstadoArreglos() {
    this.tieneEstudios = this.estudios.length > 0;
    this.tieneConocimientos = this.conocimientos.length > 0;
    this.tieneExperiencias = this.experiencias.length > 0
    this.tieneCursos = this.cursos.length > 0;
    this.tieneIdiomas = this.idiomas.length > 0;
  }
}
