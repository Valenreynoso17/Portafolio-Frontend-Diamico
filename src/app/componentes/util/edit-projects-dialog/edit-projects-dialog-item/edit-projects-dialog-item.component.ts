import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/model/Proyecto';
import { EditProjectDialogItemDialogComponent } from './edit-project-dialog-item-dialog/edit-project-dialog-item-dialog.component';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-projects-dialog-item',
  templateUrl: './edit-projects-dialog-item.component.html',
  styleUrls: ['./edit-projects-dialog-item.component.css']
})
export class EditProjectsDialogItemComponent {

  @Input() proyecto: Proyecto;
  @Output() eliminarProyectoEvent = new EventEmitter();

  constructor(public dialog:MatDialog, private proyectoService: ProjectService) {}

  onProjectClick() {
    const editProjectDialogRef = this.dialog.open(EditProjectDialogItemDialogComponent, {
      data: { proyecto: this.proyecto },
      autoFocus: false
    });

    editProjectDialogRef.afterClosed().subscribe(res => {
      if(res.proyectoEliminado == true) {
        this.eliminarProyectoEvent.emit(this.proyecto);
      } else if(res.proyectoEliminado == false && res.proyectoEditado != undefined) {
        this.proyectoService.editar(res.proyectoEditado).subscribe(res => {
          console.log(res);
          console.log("Edicion con éxito");
        })
      }
    });
  }

  

}
