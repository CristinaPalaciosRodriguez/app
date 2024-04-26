import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataFormularioService } from '../data-formulario.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.scss']
})
export class ConocimientosComponent implements OnInit {

 
  dataSource = new MatTableDataSource<ConocimientoElement>([]);
  conocimiento: string = '';

  displayedColumns = ['conocimiento', 'eliminar'];

  constructor(private dataFormularioService: DataFormularioService) { }

  ngOnInit(): void {
    console.log('displayedColumns:', this.displayedColumns);
    console.log('dataSource.data:', this.dataSource.data);
  }

  guardarConocimiento(): void {
    if (this.conocimiento) {
      const nuevaExperiencia: ConocimientoElement = {
        conocimiento: this.conocimiento
      };

      console.log('Nuevo elemento a agregar:', nuevaExperiencia);

      this.dataSource.data.push(nuevaExperiencia);
      this.dataSource.data = [...this.dataSource.data]; 

      console.log('dataSource.data después de agregar:', this.dataSource.data);
      this.dataFormularioService.guardarConocimientos(this.dataSource.data);
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
    this.dataFormularioService.guardarConocimientos(this.dataSource.data);
  }
}

export interface ConocimientoElement {
  conocimiento: string;
}
 