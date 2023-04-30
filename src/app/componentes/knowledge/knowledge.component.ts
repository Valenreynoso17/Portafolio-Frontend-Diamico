import { Component, Input } from '@angular/core';
import { Conocimiento } from 'src/app/model/Conocimiento';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent {

  @Input() listaConocimientos: Conocimiento[] = [];

  constructor(public authService: AuthorizationService) { }

  onEditEvent() {
    console.log("Know edit event")
  }
}
