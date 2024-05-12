import { Component, OnInit } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) { 
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

  todosArreglosLlenos(): boolean {
    return this.dataFormularioService.tieneEstudios &&
           this.dataFormularioService.tieneConocimientos &&
           this.dataFormularioService.tieneExperiencias &&
           this.dataFormularioService.tieneIdiomas
  }
}
