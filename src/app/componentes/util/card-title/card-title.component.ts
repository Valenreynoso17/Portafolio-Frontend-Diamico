import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent {

  @Input() titleText: String = "";
  @Output() editEvent = new EventEmitter();

  constructor(public authService: AuthorizationService) { }

  onEditButtonClick() {
    this.editEvent.emit();
  }
}
