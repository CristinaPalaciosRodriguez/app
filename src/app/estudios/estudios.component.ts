import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  dataSource = new MatTableDataSource<EstudioElement>([]);
  universidad: string = '';
  carrera: string = '';
  generacion: Date | null = null;

  displayedColumns = ['universidad', 'carrera', 'generacion', 'eliminar'];

  constructor() { }

  ngOnInit(): void {
    console.log('displayedColumns:', this.displayedColumns);
    console.log('dataSource.data:', this.dataSource.data);
  }

  guardarEstudio(): void {
    if (this.universidad && this.carrera && this.generacion) {
      const nuevaExperiencia: EstudioElement = {
        universidad: this.universidad,
        carrera: this.carrera,
        generacion: this.generacion
      };

      console.log('Nuevo elemento a agregar:', nuevaExperiencia);

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data]; 

      console.log('dataSource.data después de agregar:', this.dataSource.data);

      this.resetFormulario();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  resetFormulario(): void {
    this.universidad = '';
    this.carrera = '';
    this.generacion = null;
  }

  eliminarElemento(elemento: EstudioElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
  }
}

export interface EstudioElement {
  universidad: string;
  carrera: string;
  generacion: Date;
}
