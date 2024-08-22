import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { IdiomasElement } from '../models/idiomas.interface';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent implements OnInit, OnDestroy {

  dataSource = new MatTableDataSource<IdiomasElement>([]);
  idioma: string = '';
  nivel: string = '';
  selectedLanguage: string = 'es';
  languageTexts: any;
  nivelOptions: any;
  private languageSubscription: Subscription;

  displayedColumns = ['idioma', 'nivel', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
      this.nivelOptions = [
        { value: languageTexts.basico, viewValue: languageTexts.basico },
        { value: languageTexts.intermedio, viewValue: languageTexts.intermedio },
        { value: languageTexts.avanzado, viewValue: languageTexts.avanzado }
      ];
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe(); // Unsubscribe to avoid memory leaks
  }

  guardarIdioma(form: NgForm): void {
    if (form.valid) {
      const nuevoIdioma: IdiomasElement = {
        idioma: this.idioma,
        nivel: this.nivel
      };

      console.log('Nuevo elemento a agregar:', nuevoIdioma);

      this.dataSource.data.push(nuevoIdioma);
      this.dataSource.data = [...this.dataSource.data];

      this.dataFormularioService.guardarIdioma(this.dataSource.data);
      this.resetFormulario(form);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos obligatorios.',
      });
    }
  }

  resetFormulario(form: NgForm): void {
    this.idioma = '';
    this.nivel = '';
    form.resetForm();
  }

  eliminarElemento(elemento: IdiomasElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.dataFormularioService.guardarIdioma(this.dataSource.data);
  }
}
