import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';

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

  constructor(private dataFormularioService: DataFormularioService) { }

  ngOnInit(): void {
  }

  guardarEstudio(): void {
    if (this.universidad && this.carrera && this.generacion) {
      const nuevaExperiencia: EstudioElement = {
        universidad: this.universidad,
        carrera: this.carrera,
        generacion: this.generacion
      };

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data]; 

      this.dataFormularioService.guardarEstudios(this.dataSource.data);
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
    this.dataFormularioService.guardarEstudios(this.dataSource.data);
  }
}

export interface EstudioElement {
  universidad: string;
  carrera: string;
  generacion: Date;
}
