import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { SkillsElement } from '../models/skills.interface';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  selection = new SelectionModel<SkillsElement>(true, []);
  dataSource = new MatTableDataSource<SkillsElement>([
    // Agrega más elementos si es necesario
  ]);
  skill: string = '';
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;

  displayedColumns = ['select','skill', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });
   }

   ngOnInit(): void {
    // Cargar datos desde localStorage al iniciar
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      this.dataSource.data = JSON.parse(storedSkills);
    }
  }

  guardarSkill(): void {
    if (this.skill) {
      const nuevaSkill: SkillsElement = {
        skill: this.skill,
        position: this.dataSource.data.length + 1
      };

      this.dataSource.data.push(nuevaSkill);
      this.dataSource.data = [...this.dataSource.data];

      this.selection.select(nuevaSkill);
      this.dataFormularioService.guardarSkills(this.selection.selected);

      // Guardar en localStorage
      localStorage.setItem('skills', JSON.stringify(this.dataSource.data));

      this.resetFormulario();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  resetFormulario(): void {
    this.skill = '';
  }

  eliminarElemento(elemento: SkillsElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.selection.deselect(elemento);
    this.dataFormularioService.guardarSkills(this.dataSource.data);

    // Actualizar localStorage
    localStorage.setItem('skills', JSON.stringify(this.dataSource.data));
  }

   // Para select en tabla
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    this.dataFormularioService.guardarSkills(this.selection.selected);
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    this.dataFormularioService.guardarSkills(this.selection.selected);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SkillsElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
