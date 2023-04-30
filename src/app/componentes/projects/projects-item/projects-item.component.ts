import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css']
})
export class ProjectsItemComponent implements OnInit {

  @Input() proyecto: Proyecto;

  link: String = "";
  projectName: String = "";
  projectDescription: String = '';

  ngOnInit(): void {
    this.link = this.proyecto.link;
    this.projectName = this.proyecto.nombre;
    this.projectDescription = this.proyecto.descripcion;
  }

  
}
