import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  @ViewChild('contenidoPDF', { static: false }) contenidoPDF: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = '';
  apellidos: string = '';
  nacionalidad: string = '';
  edad: number = 18;

  enviarDatos() {
    const options = {
      margin: 1,
      filename: 'datos_personales.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
      .from(this.contenidoPDF.nativeElement)
      .set(options)
      .save();
  }
}