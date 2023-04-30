import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() acercaDe: String;

  //componentTitle: String = "Acerca de";

  personAbout: String = "";

  constructor(public authService: AuthorizationService) { }

  ngOnInit(): void {
    this.personAbout = this.acercaDe;
  }

  onEditEvent() {
    console.log("About edit event");
  }

}
