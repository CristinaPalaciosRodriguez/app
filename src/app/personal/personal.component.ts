import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataFormularioService } from '../data-formulario.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  constructor(private dataFormularioService: DataFormularioService) { }

  nombre: string = '';
  apellidos: string = '';
  nacionalidad: string = '';
  edad: number = 18;
  plantillaHTML: string = '';

  enviarDatos() {
    this.dataFormularioService.guardarDatos(this.nombre, this.apellidos, this.nacionalidad, this.edad);
  }

  todosArreglosLlenos(): boolean {
    return this.dataFormularioService.tieneEstudios &&
           this.dataFormularioService.tieneConocimientos &&
           this.dataFormularioService.tieneExperiencias
  }
  

}