import { Component } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
      this.idiomaOptions = [
        { value: languageTexts.ingles + ' - ' + languageTexts.basico, viewValue: languageTexts.ingles + ' - ' + languageTexts.basico },
        { value: languageTexts.ingles + ' - ' + languageTexts.intermedio, viewValue: languageTexts.ingles + ' - ' + languageTexts.intermedio },
        { value: languageTexts.ingles + ' - ' + languageTexts.avanzado, viewValue: languageTexts.ingles + ' - ' + languageTexts.avanzado },
      ];
    });
   }

  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;
  nombre: string = '';
  apellidos: string = '';
  nacionalidad: string = '';
  edad: number = 0;
  tiempoExperiencia: any;
  ciudad: string = '';
  pais: string = '';
  plantillaHTML: string = '';
  idiomaOptions: any;
  idioma: string = '';

  handleBlurEvent(): void {
    this.ngOnDestroy();
     const nuevoIdioma: any = {
            idioma: this.idioma,
            nivel: this.idioma
          };

    var idiomas= [nuevoIdioma]

    this.dataFormularioService.guardarIdioma(idiomas);
    this.dataFormularioService.guardarPersonal(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.tiempoExperiencia);
  }

  ngOnDestroy() {

  }

}
