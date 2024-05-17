import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { ConocimientoElement } from '../models/conocimientos.interface';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-conocimiento-total',
  templateUrl: './conocimiento-total.component.html',
  styleUrls: ['./conocimiento-total.component.scss']
})
export class ConocimientoTotalComponent implements OnInit {

  selection = new SelectionModel<ConocimientoElement>(true, []);
  dataSource = new MatTableDataSource<ConocimientoElement>([
    { conocimiento: 'PLC', position: 1 },
    { conocimiento: 'TIA PORTAL', position: 2 },
    { conocimiento: 'SCADA', position: 3 },
    { conocimiento: 'API', position: 4 },
    { conocimiento: 'MVC', position: 5 },
    { conocimiento: 'SQL', position: 6 },
    { conocimiento: 'MySQL', position: 7 },
    { conocimiento: 'Power BI', position: 8 },
    // Agrega más elementos si es necesario
  ]);
  conocimiento: string = '';
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;

  displayedColumns = ['select','conocimiento', 'eliminar'];

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

  guardarConocimiento(): void {
    if (this.conocimiento) {
      const nuevaExperiencia: ConocimientoElement = {
        conocimiento: this.conocimiento,
        position: (this.dataSource.data.length + 1)
      };

      console.log('Nuevo elemento a agregar:', nuevaExperiencia);

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data]; 
      
      this.selection.select(nuevaExperiencia);

      //this.dataFormularioService.guardarConocimientos(this.dataSource.data);
      this.dataFormularioService.guardarConocimientos(this.selection.selected);
      this.resetFormulario();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  resetFormulario(): void {
    this.conocimiento = '';
  }

  eliminarElemento(elemento: ConocimientoElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.selection.deselect(elemento); // Deselecciona el elemento eliminado
    this.dataFormularioService.guardarConocimientos(this.dataSource.data);
  }

   // Para select en tabla
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.dataFormularioService.guardarConocimientos(this.selection.selected);
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    this.dataFormularioService.guardarConocimientos(this.selection.selected);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ConocimientoElement): string {
    console.log("this.selection",this.selection.selected);
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  categories = [
    { title: 'CONOCIMIENTO TECNICO / TECHNICAL KNOWHOW' },
    { title: 'CONOCIMIENTO ADMINISTRATIVO / ADMINISTRATIVE KNOWHOW' },
    { title: 'CONOCIMIENTO DE GESTIÓN / MANAGEMENT KNOWHOW' }
  ];

}
