import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/model/Conocimiento';

@Component({
  selector: 'app-knowledge-item',
  templateUrl: './knowledge-item.component.html',
  styleUrls: ['./knowledge-item.component.css']
})
export class KnowledgeItemComponent {

  constructor() {}

  @Input() conocimiento: Conocimiento;

  
}
