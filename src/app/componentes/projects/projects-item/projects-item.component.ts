import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css']
})
export class ProjectsItemComponent {

  @Input() proyecto: Proyecto;

}
