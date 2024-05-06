import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface LanguageText {
  selectLanguage: string;
  menu: string;
  nombre: string;
  apellidos: string;
  nacionalidad: string;
  edad: string;
  ciudad: string;
  pais: string;
  obligatorio: string;
  actual: string;
  universidad: string;
  carrera: string;
  fechaIniU: string;
  fechaFinU: string;
  fechaActual: string;
  puesto: string;
  empresa: string;
  actividades: string;
  conocimiento: string;
  // Agrega más claves y valores según sea necesario para otros elementos de la interfaz de usuario
}


interface LanguageTexts {
  [key: string]: LanguageText;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language: string  = '';
  languageTextsArray: any;
  private languageTexts: LanguageTexts = {
    en: {
      selectLanguage: 'Select language',
      menu: 'Menu',
      nombre: 'Name',
      apellidos: 'Last names',
      nacionalidad: 'Nationality',
      edad: 'Age',
      ciudad: 'Current city of residence',
      pais: 'Current country of residence',
      obligatorio: 'This field is required',
      actual: 'Current',
      universidad: 'University',
      carrera: 'Degree',
      fechaIniU: 'Select start date',
      fechaFinU: 'Select end date',
      fechaActual: 'Select date',
      puesto: 'Position',
      empresa: 'Enterprise',
      actividades: 'Activities',
      conocimiento: 'Knowledge',
      // Agrega más claves y valores según sea necesario para otros elementos de la interfaz de usuario en inglés
    },
    es: {
      selectLanguage: 'Seleccionar idioma',
      menu: 'Menú',
      nombre: 'Nombre',
      apellidos: 'Apellidos',
      nacionalidad: 'Nacionalidad',
      edad: 'Edad',
      ciudad: 'Ciudad de residencia actual',
      pais: 'País de residencia actual',
      obligatorio: 'El campo es obligatorio',
      actual: 'Actual',
      universidad: 'Universidad',
      carrera: 'Carrera',
      fechaIniU: 'Seleccione fecha de inicio',
      fechaFinU: 'Seleccione fecha de fin',
      fechaActual: 'Seleccione fecha',
      puesto: 'Puesto',
      empresa: 'Empresa',
      actividades: 'Actividades',
      conocimiento: 'Conocimiento',
      // Agrega más claves y valores según sea necesario para otros elementos de la interfaz de usuario en español
    }
    // Agrega más idiomas según sea necesario
  };

  private _languageTextsSubject = new BehaviorSubject<LanguageText>(this.languageTexts.es);

  languageTexts$ = this._languageTextsSubject.asObservable();

  constructor() {}

  getLanguageTexts(language: string): LanguageText {
    this.language = language;
    return this.languageTexts[language] || this.languageTexts['en']; // Fallback al inglés si no se encuentra el idioma
  }

  updateLanguageTexts(language: string) {
    this.languageTextsArray = this.getLanguageTexts(language);
    this._languageTextsSubject.next(this.languageTextsArray);
  }
}
