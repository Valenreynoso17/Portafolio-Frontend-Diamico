import { Component, OnInit } from '@angular/core';
import { Persona } from './model/Persona';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Portafolio-Frontend-Dinamico';

  persona: Persona;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersona().subscribe(p => {
      this.persona = p;
    })
  }

  actualizarPersona() {
    this.personService.getPersona().subscribe(p => {
      this.persona = p;
    })
  }
}
