import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @Input() listaProyectos: Proyecto[] = [];

  constructor(public authService: AuthorizationService) { }

  onEditEvent() {
    console.log("Pro edit event")
  }
}
