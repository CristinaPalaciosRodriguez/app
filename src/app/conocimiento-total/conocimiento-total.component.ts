import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { ConocimientoElement } from '../models/conocimientos.interface';
import {SelectionModel} from '@angular/cdk/collections';

type Category = {
  title: string;
};

@Component({
  selector: 'app-conocimiento-total',
  templateUrl: './conocimiento-total.component.html',
  styleUrls: ['./conocimiento-total.component.scss']
})
export class ConocimientoTotalComponent implements OnInit {

  selection = new SelectionModel<ConocimientoElement>(true, []);
  dataSource = new MatTableDataSource<ConocimientoElement>([]);
  categories: Category[] = [];
  conocimiento: string = '';
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;

  displayedColumns = ['select','conocimiento', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
      this.updateCategories();
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

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data];
      
      this.selection.select(nuevaExperiencia);

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
    this.selection.deselect(elemento);
    this.dataFormularioService.eliminarConocimientos([elemento]);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      const deselectedElements = [...this.selection.selected];
      this.selection.clear();
      this.dataFormularioService.eliminarConocimientos(deselectedElements);
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
      this.dataFormularioService.guardarConocimientos(this.selection.selected);
    }
  }

  checkboxLabel(row?: ConocimientoElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  toggleSelection(row: ConocimientoElement) {
    this.selection.toggle(row);
    if (this.selection.isSelected(row)) {
      this.dataFormularioService.guardarConocimientos([row]);
    } else {
      this.dataFormularioService.eliminarConocimientos([row]);
    }
  }

  updateCategories() {
    this.categories = [
      { title: 'PLCs' },
      { title: 'HMIs' },
      { title: 'DRIVEs / SERVOs' },
      { title: 'Software' },
      { title: this.languageTexts.lenguajeProgramacion },
      { title: 'Network' }
    ];

    this.dataSource.data = [
      { conocimiento: 'Safety', position: 1 },
      { conocimiento: 'Sensores', position: 2 },
      { conocimiento: 'Válvulas', position: 3 },
      { conocimiento: 'Encoders', position: 4 },
      { conocimiento: this.languageTexts.conocimiento5 , position: 5 },
      { conocimiento: this.languageTexts.conocimiento6 , position: 6 },
      { conocimiento: this.languageTexts.conocimiento7 , position: 7 },
      // Agrega más elementos si es necesario
    ];
  }

}
