import { Component, OnInit } from '@angular/core';
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
export class IdiomasComponent implements OnInit {

  dataSource = new MatTableDataSource<IdiomasElement>([]);
  idioma: string = '';
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;

  displayedColumns = ['idioma', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });
  }

  ngOnInit(): void {
    console.log('displayedColumns:', this.displayedColumns);
    console.log('dataSource.data:', this.dataSource.data);
  }

  guardarIdioma(form: NgForm): void {
    if (form.valid) {
      const nuevoIdioma: IdiomasElement = {
        idioma: this.idioma
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
    form.resetForm();
  }

  eliminarElemento(elemento: IdiomasElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.dataFormularioService.guardarIdioma(this.dataSource.data);
  }
}
