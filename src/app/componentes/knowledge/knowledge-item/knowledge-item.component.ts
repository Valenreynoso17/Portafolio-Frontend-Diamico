import { Component, Input, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/model/Conocimiento';

@Component({
  selector: 'app-knowledge-item',
  templateUrl: './knowledge-item.component.html',
  styleUrls: ['./knowledge-item.component.css']
})
export class KnowledgeItemComponent implements OnInit {

  @Input() conocimiento: Conocimiento;

  logoUrl: String = "";
  name: String = "";

  ngOnInit(): void {
    this.logoUrl = this.conocimiento.logo;
    this.name = this.conocimiento.nombre;
  }
  
}
