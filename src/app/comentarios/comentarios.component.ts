import { CvModalComponent } from './../cv-modal/cv-modal.component';
import { Component, OnInit } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import * as html2pdf from 'html2pdf.js';
import { jsPDF } from 'jspdf';
import * as HTMLDocx from 'html-docx-js/dist/html-docx';
import * as PizZip from 'pizzip';
import * as Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  //Informacion para llenar word
  apellido = '';
  nombre = '';
  nacionalidad = '';
  ciudad = '';
  pais = '';
  edad = 0;
  estudios = [
    { universidad: 'UNAM', carrera: 'Ingeniería', fechaIni: new Date(2010, 1, 1), generacion: new Date(2014, 1, 1) }
  ];
  experiencias = [{puesto: 'UNAM', empresa: 'Ingeniería',descripcion:'', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1)}];
  conocimientos = [ { conocimiento: 'Angular' } ];
  skills = [{ skill: 'Trabajo en equipo' }];
  cursos = [{ nombre: 'Ingeniería',organizacion:'',descripcion:'', fechaIni: new Date(2010, 1, 1), fechaFin: new Date(2014, 1, 1), entidad: '', tiempoEstudio: ''}]
  idiomas = [{idioma:'',nivel:''}]
  comentarios = '';
  //Finaliza informacion para llenar word

  arregloLlenosInfo: { llenos: boolean, arregloVacio: string | null } = { llenos: true, arregloVacio: null };

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService,public dialog: MatDialog) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });

    this.dataFormularioService.sendNombre$.subscribe({
      next: (nombre) => {
        this.nombre = nombre;
      }
    });

    this.dataFormularioService.sendApellidos$.subscribe({
      next: (apellido) => {
        this.apellido = apellido;
      }
    });

    this.dataFormularioService.sendNacionalidad$.subscribe({
      next: (nacionalidad) => {
        this.nacionalidad = nacionalidad;
      }
    });

    this.dataFormularioService.sendCiudad$.subscribe({
      next: (ciudad) => {
        this.ciudad = ciudad;
      }
    });

    this.dataFormularioService.sendPais$.subscribe({
      next: (pais) => {
        this.pais = pais;
      }
    });

    this.dataFormularioService.sendEdad$.subscribe({
      next: (edad) => {
        this.edad = edad;
      }
    });

    this.dataFormularioService.sendConocimientos$.subscribe({
      next: (conocimientos) => {
        this.conocimientos = conocimientos;
      }
    });

    this.dataFormularioService.sendSkills$.subscribe({
      next: (skills) => {
        this.skills = skills;
      }
    });

    this.dataFormularioService.sendEstudios$.subscribe({
      next: (estudios) => {
        this.estudios = estudios;
      }
    });

    this.dataFormularioService.sendExperiencias$.subscribe({
      next: (experiencias) => {
        this.experiencias = experiencias;
      }
    });

    this.dataFormularioService.sendCursos$.subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    });

    this.dataFormularioService.sendIdiomas$.subscribe({
      next: (idiomas) => {
        this.idiomas = idiomas;
      }
    });
    this.dataFormularioService.sendComentarios$.subscribe({
      next: (comentarios) => {
        this.comentarios = comentarios;
      }
    });
  }

  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;
  comentario: string = '';
  disenoHoja: string = 'Diseño de una columna';

  ngOnInit(): void {
  }


  enviarDatos() {
    this.dataFormularioService.guardarDatos(this.comentario, this.disenoHoja);
  }

  todosArreglosLlenos(): { llenos: boolean, arregloVacio: string | null } {
    if (!this.dataFormularioService.tieneEstudios) {
      return { llenos: false, arregloVacio: 'UNIVERSIDAD / UNIVERSITY' };
    }
    if (!this.dataFormularioService.tieneConocimientos) {
      return { llenos: false, arregloVacio: 'CONOCIMIENTO TECNICO / TECHNICIAL KNOWHOW' };
    }
    if (!this.dataFormularioService.tieneExperiencias) {
      return { llenos: false, arregloVacio: 'EXPERIENCIA LABORAL / WORK EXPERIENCE' };
    }
    if (!this.dataFormularioService.tieneIdiomas) {
      return { llenos: false, arregloVacio: 'IDIOMAS / LANGUAGES' };
    }
    if (!this.dataFormularioService.tienePersonal) {
      return { llenos: false, arregloVacio: 'DATOS PERSONALES / PERSONAL DATA' };
    }
    return { llenos: true, arregloVacio: null };
  }

  verificarArreglos(event: Event) {
    const resultado = this.todosArreglosLlenos();
    this.arregloLlenosInfo = resultado;

    if (!resultado.llenos && resultado.arregloVacio) {
      // Prevenir el submit
      event.preventDefault();
      event.stopPropagation();

      // Mostrar la notificación
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `La sección de ${resultado.arregloVacio} está vacío`,
      });
    } else {
      // Si todos los arreglos están llenos, permite el submit
      this.enviarDatos();
      this.downloadPdf()
    }
  }

  openPdfViewer() {
    this.dialog.open(CvModalComponent,{data: { tipo: this.disenoHoja }});
  }


  downloadPdf() {
    var templateUrl = 'assets/PlantillaUno.docx';
    var conocimientosFormateados: any = [];
    var habilidadesFormateados: any = [];
    if(this.disenoHoja === 'Diseño de una columna'){
      if((this.conocimientos.length > 0 && this.skills.length === 0) || (this.skills.length > 0 && this.conocimientos.length === 0)
        || (this.conocimientos.length > 13 || this.skills.length > 13)){
          if(this.selectedLanguage === 'es'){
            templateUrl = 'assets/PlantillaUno.docx';
          } else {
            templateUrl = 'assets/PlantillaUnoEng.docx';
          }
           // Agrupar los conocimientos en objetos de 4 propiedades
            for (let i = 0; i < this.conocimientos.length; i += 4) {
              const bloque: any = {};

              if (this.conocimientos[i]?.conocimiento) {
                bloque.conocimiento1 = this.conocimientos[i].conocimiento;
              }
              if (this.conocimientos[i + 1]?.conocimiento) {
                bloque.conocimiento2 = this.conocimientos[i + 1].conocimiento;
              }
              if (this.conocimientos[i + 2]?.conocimiento) {
                bloque.conocimiento3 = this.conocimientos[i + 2].conocimiento;
              }
              if (this.conocimientos[i + 3]?.conocimiento) {
                bloque.conocimiento4 = this.conocimientos[i + 3].conocimiento;
              }

              conocimientosFormateados.push(bloque);
            }
            // Fin agrupacion conocimientos

            // Agrupar las skills en objetos de 4 propiedades
            for (let i = 0; i < this.skills.length; i += 4) {
              const bloque: any = {};

              if (this.skills[i]?.skill) {
                bloque.skill1 = this.skills[i].skill;
              }
              if (this.skills[i + 1]?.skill) {
                bloque.skill2 = this.skills[i + 1].skill;
              }
              if (this.skills[i + 2]?.skill) {
                bloque.skill3 = this.skills[i + 2].skill;
              }
              if (this.skills[i + 3]?.skill) {
                bloque.skill4 = this.skills[i + 3].skill;
              }

              habilidadesFormateados.push(bloque);
            }
            // Fin agrupacion skills
      } else if (this.conocimientos.length <14 && this.skills.length < 14 && this.conocimientos.length > 0 && this.skills.length > 0){
        if(this.selectedLanguage === 'es'){
          templateUrl = 'assets/PlantillaUnoColumnas.docx';
        } else {
          templateUrl = 'assets/PlantillaUnoColumnasEng.docx';
        }
        habilidadesFormateados = [];
        habilidadesFormateados = this.skills;
        conocimientosFormateados = [];
        conocimientosFormateados = this.conocimientos;
      }
    } else {
      if(this.selectedLanguage === 'es'){
        templateUrl = 'assets/PlantillaDos.docx';
      } else {
        templateUrl = 'assets/PlantillaDosEng.docx';
      }
      habilidadesFormateados = [];
      habilidadesFormateados = this.skills;
      conocimientosFormateados = [];
      conocimientosFormateados = this.conocimientos;
    }


    fetch(templateUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo DOCX');
        }
        return response.arrayBuffer();
      })
      .then(data => {
        const zip = new PizZip(data); // Cargar el archivo DOCX en PizZip
        const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

        //Actualizar estudios
        const estudiosNew = []
        for (let i = 0; i < this.estudios.length; i++) {
          const bloque: any = {};
          bloque.universidad = this.estudios[i].universidad;
          bloque.carrera = this.estudios[i].carrera;
          bloque.fechaIni = this.estudios[i].fechaIni.getFullYear();
          bloque.generacion = (this.isToday(this.estudios[i].generacion) ? this.languageTexts.actualidad : this.estudios[i].generacion.getFullYear());
          estudiosNew.push(bloque)
        }
        // Fin actualizar estudios

        // Actualizar experiencias
        const experienciasNew = []
        for (let i = 0; i < this.experiencias.length; i++) {
          const bloque: any = {};
          bloque.puesto = this.experiencias[i].puesto;
          bloque.empresa = this.experiencias[i].empresa;
          bloque.descripcion = this.experiencias[i].descripcion;
          bloque.periodo = (this.experiencias[i].fechaIni ? this.capitalizeFirstLetter(this.experiencias[i].fechaIni) : '')
          + ' - '+ (this.isToday(this.experiencias[i].fechaFin) ? this.languageTexts.actualidad :  this.experiencias[i].fechaFin ? this.capitalizeFirstLetter(this.experiencias[i].fechaFin) : '');
          experienciasNew.push(bloque)
        }
        //Fin actualizar experiencias

        // Actualizar cursos
        const cursosNew = []
        for (let i = 0; i < this.cursos.length; i++) {
          const bloque: any = {};
          bloque.nombre = this.cursos[i].nombre;
          bloque.organizacion = this.cursos[i].organizacion;
          bloque.descripcion = this.cursos[i].descripcion;
          bloque.entidad = this.cursos[i].entidad;
          bloque.tiempoEstudio = this.cursos[i].tiempoEstudio;
          bloque.periodo = (this.cursos[i].fechaIni ? this.capitalizeFirstLetter(this.cursos[i].fechaIni) : '')
          + ' - '+ (this.isToday(this.cursos[i].fechaFin) ? this.languageTexts.actualidad :  this.cursos[i].fechaFin ? this.capitalizeFirstLetter(this.cursos[i].fechaFin) : '');
          cursosNew.push(bloque)
        }
        // Fin actualizar cursos

        // Datos a insertar en la plantilla
        const datos = {
          EtNom: this.apellido + ' ' + this.nombre,
          EtNa: this.nacionalidad,
          EtId: this.idiomas,
          EtRe: this.ciudad+ ', '+this.pais,
          EtEd: this.edad,
          estudios: estudiosNew,
          conocimientos:  conocimientosFormateados,
          habilidades: habilidadesFormateados,
          experiencias: experienciasNew,
          cursos: cursosNew,
          comentarios: this.comentarios,
          tieneConocimientos: this.conocimientos.length > 0,
          tieneSkills: this.skills.length > 0,
          tieneCursos: this.cursos.length > 0,
          tieneComentarios: this.comentarios !== '' && this.comentarios !== undefined
        };

        // Establecer los datos en la plantilla
        doc.setData(datos);

        try {
          // Intentar renderizar el documento
          doc.render();
        } catch (error: any) {
          console.error('Error al procesar la plantilla DOCX:', error);
          if (error.properties && error.properties.errors) {
            error.properties.errors.forEach((err: any) => {
              console.error('Error específico en placeholder:', err);
            });
          }
          return;
        }

        // Obtener el archivo generado y descargarlo
        const docxContent = doc.getZip().generate({ type: 'blob' });
        saveAs(docxContent, 'Curriculum_Vitae.docx');
      })
      .catch(error => {
        console.error('Error al cargar la plantilla DOCX:', error);
      });
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  capitalizeFirstLetter(text: Date): string {
    if (!text) {
      return ''; // Devuelve una cadena vacía si el texto es null o undefined
    }

    const monthIndex = text.getMonth(); // Obtiene el índice del mes (0-11)
    const year = text.getFullYear(); // Obtiene el año
    const month = this.languageTexts.mesesArray[monthIndex] || '';
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1); // Capitaliza la primera letra
    return `${capitalizedMonth} ${year}`;
  }

}
