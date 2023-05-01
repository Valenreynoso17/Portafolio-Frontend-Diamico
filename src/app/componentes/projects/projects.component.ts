import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/model/Proyecto';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditProjectsDialogComponent } from '../util/edit-projects-dialog/edit-projects-dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @Input() idPersona: number = 0;
  @Input() listaProyectos: Proyecto[] = [];

  constructor(public authService: AuthorizationService, public dialog:MatDialog) { }

  onEditEvent() {
    const editProjectDialogRef = this.dialog.open(EditProjectsDialogComponent, {
      data: { idPersona: this.idPersona, listaProyectos: this.listaProyectos },
      autoFocus: false
    })
  }
}
