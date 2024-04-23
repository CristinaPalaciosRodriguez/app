import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarPlantilla();
  }
  

  nombre: string = '';
  apellidos: string = '';
  nacionalidad: string = '';
  edad: number = 18;
  plantillaHTML: string = '';

  cargarPlantilla() {
    this.http.get('assets/cv.html', { responseType: 'text' })
      .subscribe(
        (plantillaHTML: string) => {
          this.plantillaHTML = plantillaHTML;
        },
        (error) => {
          console.error('Error al cargar la plantilla HTML:', error);
        }
      );
  }

  enviarDatos() {
     // Reemplazar marcadores de posición con datos dinámicos
    const contenidoHTML = this.plantillaHTML
    .replace('{{nombre}}', this.nombre)
    .replace('{{apellidos}}', this.apellidos)
    .replace('{{nacionalidad}}', this.nacionalidad)
    .replace('{{edad}}', this.edad.toString());

  // Generar el PDF
  const doc = new jsPDF();
  doc.html(contenidoHTML, {
    callback: (pdf) => {
      pdf.save('datos_personales.pdf');
    }
  });
  }
}