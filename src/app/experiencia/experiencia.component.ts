import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  puesto: string = '';
  empresa: string = '';
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  actividades: string = '';
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;
  fechaActual: Date = new Date();
  displayedColumns = ['puesto', 'empresa', 'fechaIni', 'fechaFin', 'actividades', 'eliminar'];

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

  guardarExperiencia(): void {
    if (this.puesto && this.empresa && this.fechaInicio && this.fechaFin && this.actividades) {
      const nuevaExperiencia: PeriodicElement = {
        puesto: this.puesto,
        empresa: this.empresa,
        fechaIni: this.fechaInicio,
        fechaFin: this.fechaFin,
        actividades: this.actividades
      };

      console.log('Nuevo elemento a agregar:', nuevaExperiencia);

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data]; 

      console.log('dataSource.data después de agregar:', this.dataSource.data);
      this.dataFormularioService.guardarExperiencias(this.dataSource.data);
      this.resetFormulario();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  setFechaActual() {
    this.fechaFin = this.fechaActual;
  }

  resetFormulario(): void {
    this.puesto = '';
    this.empresa = '';
    this.fechaInicio = null;
    this.fechaFin = null;
    this.actividades = '';
  }

  eliminarElemento(elemento: PeriodicElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.dataFormularioService.guardarExperiencias(this.dataSource.data);
  }
}

export interface PeriodicElement {
  puesto: string;
  empresa: string;
  fechaIni: Date;
  fechaFin: Date;
  actividades: string;
}
