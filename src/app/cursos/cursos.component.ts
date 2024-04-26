import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

 
  dataSource = new MatTableDataSource<CursoElement>([]);
  nombre: string = '';
  organizacion: string = '';
  fechaIni: Date | null = null;
  fechaFin: Date | null = null;
  descripcion: string = '';

  displayedColumns = ['nombre', 'organizacion', 'fechaIni','fechaFin','descripcion', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService) { }

  ngOnInit(): void {
    console.log('displayedColumns:', this.displayedColumns);
    console.log('dataSource.data:', this.dataSource.data);
  }

  guardarCurso(): void {
    if (this.nombre && this.organizacion && this.fechaIni && this.fechaFin && this.descripcion) {
      const nuevaExperiencia: CursoElement = {
        nombre: this.nombre,
        organizacion: this.organizacion,
        fechaIni: this.fechaIni,
        fechaFin: this.fechaFin,
        descripcion: this.descripcion
      };

      console.log('Nuevo elemento a agregar:', nuevaExperiencia);

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data]; 

      console.log('dataSource.data después de agregar:', this.dataSource.data);
      this.dataFormularioService.guardarCursos(this.dataSource.data);
      this.resetFormulario();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }

  resetFormulario(): void {
    this.nombre = '';
    this.organizacion = '';
    this.fechaIni = null;
    this.fechaFin = null;
    this.descripcion = '';
  }

  eliminarElemento(elemento: CursoElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
    this.dataFormularioService.guardarCursos(this.dataSource.data);
  }
}

export interface CursoElement {
  nombre: string;
  organizacion: string;
  fechaIni: Date;
  fechaFin: Date;
  descripcion: string;
}
 