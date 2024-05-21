import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { ConocimientoElement } from '../models/conocimientos.interface';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.scss']
})
export class ConocimientosComponent implements OnInit, OnChanges {
  @Input() categoryTitle!: string;

  selection = new SelectionModel<ConocimientoElement>(true, []);
  dataSource = new MatTableDataSource<ConocimientoElement>([]);

  conocimientosPLCs: ConocimientoElement[] = [
    { conocimiento: 'SIEMENS (PLC)', position: 1 },
    { conocimiento: 'ALLEN BRADLEY (PLC)', position: 2 },
    { conocimiento: 'SCHNEIDER (PLC)', position: 3 },
    { conocimiento: 'MITSUBISHI (PLC)', position: 4 },
    { conocimiento: 'OMRON (PLC)', position: 5 },
    { conocimiento: 'ABB (PLC)', position: 6 },
    // Agrega más elementos según sea necesario
  ];

  conocimientosHMIs: ConocimientoElement[] = [
    { conocimiento: 'SIEMENS (HMI)', position: 1 },
    { conocimiento: 'ALLEN BRADLEY (HMI)', position: 2 },
    { conocimiento: 'SCHNEIDER (HMI)', position: 3 },
    // Agrega más elementos según sea necesario
  ];

  conocimientosDrivesServos: ConocimientoElement[] = [
    { conocimiento: 'SIEMENS (Drive/Servo)', position: 1 },
    { conocimiento: 'ALLEN BRADLEY (Drive/Servo)', position: 2 },
    { conocimiento: 'SCHNEIDER (Drive/Servo)', position: 3 },
    { conocimiento: 'YASKAWA (Drive/Servo)', position: 4 },
    { conocimiento: 'LENZE (Drive/Servo)', position: 5 },
    { conocimiento: 'ABB (Drive/Servo)', position: 6 },
    // Agrega más elementos según sea necesario
  ];

  conocimientosSoftware: ConocimientoElement[] = [
    { conocimiento: 'TIA Portal', position: 1 },
    { conocimiento: 'STEP 7', position: 2 },
    { conocimiento: 'WINCC', position: 3 },
    { conocimiento: 'PCS7', position: 4 },
    { conocimiento: 'StartDrive', position: 5 },
    { conocimiento: 'Starter', position: 6 },
    { conocimiento: 'Studio5000', position: 7 },
    { conocimiento: 'RSLogix', position: 8 },
    { conocimiento: 'Factory Talk View ME/SE', position: 9 },
    { conocimiento: 'Component WorkBench', position: 10 },
    { conocimiento: 'PlantPAx', position: 11 },
    { conocimiento: 'DriveTools', position: 12 },
    { conocimiento: 'RSNetworx', position: 13 },
    { conocimiento: 'EcoStruxure Control Expert', position: 14 },
    { conocimiento: 'Unity Pro', position: 15 },
    { conocimiento: 'Vijeo Designer', position: 16 },
    { conocimiento: 'SoMove', position: 17 },
    // Agrega más elementos según sea necesario
  ];

  conocimientosLenguaje: ConocimientoElement[] = [
    { conocimiento: 'Ladder', position: 1 },
    { conocimiento: 'FBD', position: 2 },
    { conocimiento: 'ST', position: 3 },
    { conocimiento: 'IL', position: 4 },
    { conocimiento: 'SFC', position: 5 },
    { conocimiento: 'GRAFCET', position: 6 },
    // Agrega más elementos según sea necesario
  ];

  conocimientosNetwork: ConocimientoElement[] = [
    { conocimiento: 'Profinet', position: 1 },
    { conocimiento: 'Profibus DP', position: 2 },
    { conocimiento: 'Ethernet IP', position: 3 },
    { conocimiento: 'ControlNet', position: 4 },
    { conocimiento: 'DeviceNet', position: 5 },
    { conocimiento: 'EtherCat', position: 6 },
    // Agrega más elementos según sea necesario
  ];

  conocimiento: string = '';
  selectedLanguage: string = 'es';
  languageTexts: any;
  private languageSubscription: Subscription;

  displayedColumns = ['select', 'conocimiento', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
    this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
      this.languageTexts = languageTexts;
    });
  }

  ngOnInit(): void {
    this.updateDataSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoryTitle']) {
      this.updateDataSource();
    }
  }

  updateDataSource() {
    switch (this.categoryTitle) {
      case 'PLCs':
        this.dataSource.data = this.conocimientosPLCs;
        break;
      case 'HMIs':
        this.dataSource.data = this.conocimientosHMIs;
        break;
      case 'DRIVEs / SERVOs':
        this.dataSource.data = this.conocimientosDrivesServos;
        break;
      case 'Software':
        this.dataSource.data = this.conocimientosSoftware;
        break;
      case 'Lenguaje de programación':
        this.dataSource.data = this.conocimientosLenguaje;
        break;
        case 'Language of programming':
          this.dataSource.data = this.conocimientosLenguaje;
          break;
      case 'Network':
        this.dataSource.data = this.conocimientosNetwork;
        break;
      default:
        this.dataSource.data = [];
        break;
    }
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
}
