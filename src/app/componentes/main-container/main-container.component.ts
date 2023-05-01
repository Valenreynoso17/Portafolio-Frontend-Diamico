import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent {

  @Input() persona: Persona;
  @Output() actualizarPersonaEvent = new EventEmitter;  

  constructor(private personaService: PersonService) {}

  actualizarPersona() {
    this.actualizarPersonaEvent.emit();
  }

  editAbout(nuevoAcercaDe: String) {

    this.persona.acercaDe = nuevoAcercaDe;

    this.personaService.editar(this.persona).subscribe(res => {
      this.actualizarPersona();
    })
  }
  
}
