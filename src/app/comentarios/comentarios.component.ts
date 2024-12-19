import { CvModalComponent } from './../cv-modal/cv-modal.component';
import { Component, OnInit } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import * as html2pdf from 'html2pdf.js';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  arregloLlenosInfo: { llenos: boolean, arregloVacio: string | null } = { llenos: true, arregloVacio: null };

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService,public dialog: MatDialog) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
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
    }
  }

  openPdfViewer() {
    const htmlContent = this.dataFormularioService.obtenerHtmlPdf(this.disenoHoja);

    this.dialog.open(CvModalComponent, {
      width: '80%',
      data: { content: htmlContent }
    });
  }


  downloadPdf() {
    const doc = new jsPDF('p', 'in', 'letter'); // Configura la página en formato carta (8.5 x 11 in)

    const element = document.getElementById('cv-container');
    if (element) {
      // Genera el PDF con el contenido de tu elemento
      doc.html(element, {
        margin: [0, 0, 0, 0], // Sin márgenes adicionales
        x: 0, // Comienza en la esquina superior izquierda
        y: 0, // Empieza en la parte superior
        width: 8.5, // Ancho de la página
        windowWidth: element.scrollWidth, // Ajusta el ancho de la ventana según el contenido
        callback: () => {
          // Guardar el PDF generado
          doc.save('CV_Juan_Perez.pdf');
        }
      });
    } else {
      console.error('No se encontró el elemento con el ID "cv-container"');
    }
  }

}
