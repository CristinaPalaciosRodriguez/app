import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, OnDestroy {
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
  tiempoExperiencia: any;
  ciudad: string = '';
  pais: string = '';
  plantillaHTML: string = '';

  ngOnInit() {
    const savedData = localStorage.getItem('personalData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.nombre = parsedData.nombre;
      this.apellidos = parsedData.apellidos;
      this.nacionalidad = parsedData.nacionalidad;
      this.edad = parsedData.edad;
      this.ciudad = parsedData.ciudad;
      this.pais = parsedData.pais;
      this.tiempoExperiencia = parsedData.tiempoExperiencia;
    }
  }

  handleBlurEvent(): void {
    // Guardamos los datos en localStorage
    localStorage.setItem('personalData', JSON.stringify({
      nombre: this.nombre,
      apellidos: this.apellidos,
      nacionalidad: this.nacionalidad,
      edad: this.edad,
      ciudad: this.ciudad,
      pais: this.pais,
      tiempoExperiencia: this.tiempoExperiencia
    }));

    // Llamamos al servicio para almacenar los datos
    this.dataFormularioService.guardarPersonal(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.tiempoExperiencia);
  }

  ngOnDestroy() {
    // Aquí puedes hacer limpieza si es necesario
  }
}
