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
  logros: string;
  funciones: string;
  formulario: string;
  generarDoc: string;
  guardarCono: string;
  guardarEstu: string;
  guardarExp: string;
  guardarOtro: string;
  guardarIdioma: string;
  eliminar: string;
  fechaInicio: string;
  fechaFin: string;
  organizacion: string;
  tiempodeEst: string;
  selectidioma: string;
  idioma: string;
  logroet: string;
  funcionet: string;
  descripcion: string;
  entidad: string;
  entidadet: string;
  cantidad: string;
  horas: string;
  meses: string;
  dias: string;
  year: string;
  apellidonombre: string;
  datospersonales: string;
  estudioscursados: string;
  generacion: string;
  actualidad: string;
  conocimientotec: string;
  experiencialab: string;
  fecha: string;
  otrosEstudios: string;
  comentarios: string;
  tiposcurso: string;
  estilos: string;
  estilo1: string;
  estilo2: string;
  idiomas: string;
  comentariotTitulo: string;
  indicaConocimiento: string;
  residenciaactual: string;
  indicaSkill: string;
  skill: string;
  guardarSkill: string;
  skillEt: string;
  lenguajeProgramacion: string;
  conocimiento5: string;
  conocimiento6: string;
  conocimiento7: string;
  indicacion: string;
  selectnivel: string;
  basico: string;
  intermedio: string;
  avanzado: string;
  descripcionAct: string,
  mesesArray: Array<any>,
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
      logros: 'List three (3) major accomplishments',
      funciones: 'Indicate three (3) main functions',
      formulario: 'Form',
      generarDoc: 'Generate Document',
      guardarCono: 'Save Knowledge',
      guardarEstu: 'Save University',
      guardarExp: 'Save Work Experience',
      guardarOtro: 'Save another study',
      guardarIdioma: 'Save Language',
      eliminar: 'Delete',
      fechaInicio: 'Start date',
      fechaFin: 'End date',
      organizacion: 'Organization',
      tiempodeEst: 'Study Time',
      selectidioma: 'Enter the Language',
      idioma: 'Language',
      logroet: 'Accomplishments',
      funcionet: 'Functions',
      descripcion: 'Description',
      entidad: 'Enter entity where course',
      entidadet: 'Entity',
      cantidad: 'Amount of time',
      horas: 'Hours',
      meses: 'Months',
      dias: 'Days',
      year: 'Years',
      apellidonombre: 'Surname and first name',
      datospersonales: 'PERSONAL DATA',
      estudioscursados: 'STUDIES COMPLETED',
      generacion: 'Generation',
      actualidad: 'Currently',
      conocimientotec: 'TECHNICIAL KNOWHOW',
      experiencialab: 'WORK EXPERIENCE',
      fecha: 'Date',
      otrosEstudios: 'OTHER STUDIES',
      comentarios: 'Comments',
      tiposcurso: 'COURSES, DIPLOMA, MASTERS, DOCTORATE, CERTIFICATION',
      estilos: 'Document Design',
      estilo1: 'A column',
      estilo2: 'Two columns',
      idiomas: 'LANGUAGES',
      comentariotTitulo: 'NOTES OR COMMENTS',
      indicaConocimiento: 'Select the knowledge in the table (In the box) or enter a new knowledge (Type in the field)',
      residenciaactual: 'Current residence',
      indicaSkill: 'Select the skill in the table (In the box) or enter a new skill (Type in the field)',
      skill: 'Soft skill',
      guardarSkill: 'Save Soft Skill',
      skillEt: 'SOFT SKILLS',
      lenguajeProgramacion: 'Language of programming',
      conocimiento5: 'Vision Systems',
      conocimiento6: 'Drives / Protections',
      conocimiento7: 'Reading and Designing Electrical Drawings',
      indicacion: 'This form will generate a PDF document, please send it to the human resources staff.',
      selectnivel: 'Select language level',
      basico: 'Basic',
      intermedio: 'Intermediate',
      avanzado: 'Advanced',
      descripcionAct: 'Describe your activities',
      mesesArray: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
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
      logros: 'Indique tres (3) principales logros',
      funciones: 'Indique tres (3) principales funciones',
      formulario: 'Formulario',
      generarDoc: 'Generar documento',
      guardarCono: 'Guardar Conocimiento',
      guardarEstu: 'Guardar Estudio',
      guardarExp: 'Guardar Experiencia Laboral',
      guardarOtro: 'Guardar otro estudio',
      guardarIdioma: 'Guardar idioma',
      eliminar: 'Eliminar',
      fechaInicio: 'Fecha de inicio',
      fechaFin: 'Fecha de fin',
      organizacion: 'Organización',
      tiempodeEst: 'Tiempo de estudios',
      selectidioma: 'Ingrese el idioma',
      idioma: 'Idioma',
      logroet: 'Logros',
      funcionet: 'Funciones',
      descripcion: 'Descripción',
      entidad: 'Ingrese entidad en donde curso',
      entidadet: 'Entidad',
      cantidad: 'Cantidad de tiempo (Aproximado)',
      horas: 'Horas',
      meses: 'Meses',
      dias: 'Días',
      year: 'Años',
      apellidonombre: 'Apellido y nombre',
      datospersonales: 'DATOS PERSONALES',
      estudioscursados: 'ESTUDIOS CURSADOS',
      generacion: 'Generación',
      actualidad: 'Actualmente',
      conocimientotec: 'CONOCIMIENTO TECNICO',
      experiencialab: 'EXPERIENCIA LABORAL',
      fecha: 'Fecha',
      otrosEstudios: 'OTROS ESTUDIOS',
      comentarios: 'Comentarios',
      tiposcurso: 'CURSOS, DIPLOMADO, MAESTRIA, DOCTORADO, CERTIFICACIÓN',
      estilos: 'Diseño del documento',
      estilo1: 'Una columna',
      estilo2: 'Dos columnas',
      idiomas: 'IDIOMAS',
      comentariotTitulo: 'NOTAS O COMENTARIOS',
      indicaConocimiento: 'Seleccione el conocimiento en la tabla (En la casilla) o ingrese un nuevo conocimiento (Escriba en el campo)',
      residenciaactual: 'Residencia actual',
      indicaSkill: 'Seleccione la habilidad en la tabla (En la casilla) o ingrese una nueva habilidad (Escriba en el campo)',
      skill: 'Habilidad blanda',
      guardarSkill: 'Guardar habilidad blanda',
      skillEt: 'HABILIDADES BLANDAS',
      lenguajeProgramacion: 'Lenguaje de programación',
      conocimiento5: 'Sistemas de vision',
      conocimiento6: 'Accionamientos / Protecciones',
      conocimiento7: 'Lectura y diseños de Planos Electricos',
      indicacion: 'En este formulario se generara un documento en PDF, favor de enviarlo al personal de recursos humanos.',
      selectnivel: 'Selecciona el nivel del idioma',
      basico: 'Básico',
      intermedio: 'Intermedio',
      avanzado: 'Avanzado',
      descripcionAct: 'Describa sus actividades',
      mesesArray: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
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
