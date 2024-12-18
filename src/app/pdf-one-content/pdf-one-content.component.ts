import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-one-content',
  templateUrl: './pdf-one-content.component.html',
  styleUrls: ['./pdf-one-content.component.scss']
})
export class PdfOneContentComponent implements OnInit {
  languageTexts = {
    datospersonales: 'DATOS PERSONALES',
    apellidonombre: 'Apellido y Nombre',
    nacionalidad: 'Nacionalidad',
    residenciaactual: 'Residencia Actual',
    edad: 'Edad',
    estudioscursados: 'Estudios Cursados',
    carrera: 'Carrera',
    fechaInicio: 'Fecha de Inicio',
    generacion: 'Generación',
    actualidad: 'Actualmente',
    conocimientotec: 'Conocimientos Técnicos',
    skillEt: 'Habilidades'
  };

  apellido = 'Doe';
  nombre = 'John';
  nacionalidad = 'Mexicana';
  ciudad = 'Ciudad de México';
  edad = 30;

  estudios = [
    { universidad: 'UNAM', carrera: 'Ingeniería', fechaIni: new Date(2010, 1, 1), generacion: new Date(2014, 1, 1) }
  ];

  conocimientos = [{ conocimiento: 'contenedor que divida el espacio disponible entre las dos columnas y que se ajusten de forma equilibrada' }, { conocimiento: 'Angular' }, { conocimiento: 'Angular' },
    { conocimiento: 'Angular' }, { conocimiento: 'Angular' }, { conocimiento: 'Angular' }, { conocimiento: 'Angular' },
    { conocimiento: 'Angular' }, { conocimiento: 'Angular' }, { conocimiento: 'Angular' }, { conocimiento: 'Angular' },
    { conocimiento: 'Angular' }, { conocimiento: 'Angular' }, { conocimiento: 'Angular' }, { conocimiento: 'Angular' }
  ];
  skills = [{ skill: 'Trabajo en equipo' }, { skill: 'Liderazgo' }];
  fechaHoy = new Date();


  constructor() {}

  ngOnInit(): void {

  }
}
