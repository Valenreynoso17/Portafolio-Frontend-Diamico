import { Component, Input } from '@angular/core';
import { Persona } from 'src/app/model/Persona';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent {

  @Input() persona: Persona;
  
}
