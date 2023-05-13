import { Component, OnInit } from '@angular/core';
import { Persona } from './model/Persona';
import { PersonService } from './services/person.service';
import { Experiencia } from './model/Experiencia';
import { Educacion } from './model/Educacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Portafolio-Frontend-Dinamico';

  persona: Persona;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersona().subscribe(p => {
      this.persona = p;
      p.listaExperiencia.forEach((e) => this.actualizarPeriodo(e)); 
      p.listaEducacion.forEach((e) => this.actualizarPeriodo(e));    
    })
  }

  actualizarPersona() {
    this.personService.getPersona().subscribe(p => {
      this.persona = p;
    })
  }

  actualizarPeriodo(e: Experiencia | Educacion): void {
    let fechaInicioConTimezone = new Date(e.fechaInicio);
    let timezoneOffset = fechaInicioConTimezone.getTimezoneOffset() * 60000;

    e.fechaInicio = new Date(fechaInicioConTimezone.getTime() + timezoneOffset);

    e.periodo = this.getMes(e.fechaInicio.getMonth() + 1) + " " +  e.fechaInicio.getFullYear().toString();

    if(e.actual) {

      e.periodo += " - Actualidad";
  
    } else {
  
        let fechaFinConTimezone = new Date(e.fechaFin);
        let timezoneOffset = fechaFinConTimezone.getTimezoneOffset() * 60000;

        e.fechaFin = new Date(fechaFinConTimezone.getTime() + timezoneOffset);

        e.periodo += " - " + this.getMes(e.fechaFin.getMonth() + 1) + " " +  e.fechaFin.getFullYear().toString();
    } 
}

getMes(numero: number): String {

    let mes: String = "";

    switch(numero) {
      case 1: { mes = "Enero"; break; }
      case 2: { mes = "Febrero"; break; }
      case 3: { mes = "Marzo"; break; }
      case 4: { mes = "Abril"; break; }
      case 5: { mes = "Mayo"; break; }
      case 6: { mes = "Junio"; break; }
      case 7: { mes = "Julio"; break; }
      case 8: { mes = "Agosto"; break; }
      case 9: { mes = "Septiembre"; break; }
      case 10: { mes = "Octubre"; break; }
      case 11: { mes = "Noviembre"; break; }
      case 12: { mes = "Diciembre"; break; }
    }

    return mes;
  }
}
