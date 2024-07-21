import { CvModalComponent } from './../cv-modal/cv-modal.component';
import { Component, OnInit } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

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
    console.log(this.disenoHoja)
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
        text: `El arreglo de ${resultado.arregloVacio} está vacío`,
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

}
