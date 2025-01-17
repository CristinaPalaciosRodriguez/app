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
    });
   }

  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;
  nombre: string = '';
  apellidos: string = '';
  nacionalidad: string = '';
  edad: number = 0;
  ciudad: string = '';
  pais: string = '';
  plantillaHTML: string = '';

  handleBlurEvent(): void {
    this.ngOnDestroy();
    this.dataFormularioService.guardarPersonal(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais);
  }

  ngOnDestroy() {

  }

}
