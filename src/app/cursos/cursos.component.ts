import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

 
  dataSource = new MatTableDataSource<CursoElement>([]);
  curso: string = '';

  displayedColumns = ['curso', 'eliminar'];

  constructor() { }

  ngOnInit(): void {
    console.log('displayedColumns:', this.displayedColumns);
    console.log('dataSource.data:', this.dataSource.data);
  }

  guardarEstudio(): void {
    if (this.curso) {
      const nuevaExperiencia: CursoElement = {
        curso: this.curso
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
    this.curso = '';
  }

  eliminarElemento(elemento: CursoElement): void {
    this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
  }
}

export interface CursoElement {
  curso: string;
}
 