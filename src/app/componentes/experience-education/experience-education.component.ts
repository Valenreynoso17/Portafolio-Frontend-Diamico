import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent {

  @Input() listaExperiencia: Experiencia[] = [];
  @Input() listaEducacion: Educacion[] = [];
  
  constructor(public authService: AuthorizationService) { }

  onExperienceEditEvent() {
    console.log("Exp edit event")
  }

  onEducationEditEvent() {
    console.log("Edu edit event")
  }
}
