import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';

@Component({
  selector: 'app-exp-edu-item',
  templateUrl: './exp-edu-item.component.html',
  styleUrls: ['./exp-edu-item.component.css']
})
export class ExpEduItemComponent implements OnInit {

  @Input() expEduItem: (Experiencia|Educacion);

  logoUrl: String = "";
  title: String = "";
  description: String = "";
  period: String = "2022 - Actualidad";

  fechaInicio: Date;
  fechaFin: Date;

  ngOnInit(): void {
    this.logoUrl = this.expEduItem?.logo;
    this.title = this.expEduItem?.nombre;
    this.description = this.expEduItem?.descripcion;

    if(this.expEduItem != undefined) {

      let fechaInicioConTimezone = new Date(this.expEduItem.fechaInicio);
      let timezoneOffset = fechaInicioConTimezone.getTimezoneOffset() * 60000;

      this.fechaInicio = new Date(fechaInicioConTimezone.getTime() + timezoneOffset);

      this.period = this.getMes(this.fechaInicio.getMonth() + 1) + " " +  this.fechaInicio.getFullYear().toString();

      if(this.expEduItem.actual) {

        this.period += " - Actualidad";

      } else {

        let fechaFinConTimezone = new Date(this.expEduItem.fechaFin);
        let timezoneOffset = fechaFinConTimezone.getTimezoneOffset() * 60000;

        this.fechaFin = new Date(fechaFinConTimezone.getTime() + timezoneOffset);

        this.period += " - " + this.getMes(this.fechaFin.getMonth() + 1) + " " +  this.fechaFin.getFullYear().toString();
      }

    }
    
  }

  getMes(numero: number): String {

    let mes: String = "";

    switch(numero) {
      case 1: {
        mes = "Enero";
        break;
      }
      case 2: {
        mes = "Febrero";
        break;
      }
      case 3: {
        mes = "Marzo";
        break;
      }
      case 4: {
        mes = "Abril";
        break;
      }
      case 5: {
        mes = "Mayo";
        break;
      }
      case 6: {
        mes = "Junio";
        break;
      }
      case 7: {
        mes = "Julio";
        break;
      }
      case 8: {
        mes = "Agosto";
        break;
      }
      case 9: {
        mes = "Septiembre";
        break;
      }
      case 10: {
        mes = "Octubre";
        break;
      }
      case 11: {
        mes = "Noviembre";
        break;
      }
      case 12: {
        mes = "Diciembre";
        break;
      }
    }

    return mes;
  }
  

}
