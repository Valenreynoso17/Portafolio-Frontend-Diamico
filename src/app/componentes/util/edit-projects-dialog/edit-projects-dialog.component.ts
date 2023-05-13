import { Component, HostListener, Inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Proyecto } from 'src/app/model/Proyecto';
import { CreateProjectDialogComponent } from '../create-project-dialog/create-project-dialog.component';
import { PersonService } from 'src/app/services/person.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-projects-dialog',
  templateUrl: './edit-projects-dialog.component.html',
  styleUrls: ['./edit-projects-dialog.component.css']
})
export class EditProjectsDialogComponent {

  idPersona: number;
  listaProyectos: Proyecto[];

  constructor(
    public dialogRef: MatDialogRef<EditProjectsDialogComponent>,
    public dialog: MatDialog,
    private proyectoService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: { idPersona: number, listaProyectos: Proyecto[] }) { 

      this.idPersona = data.idPersona;
      this.listaProyectos = data.listaProyectos;

      this.dialogRef.backdropClick().subscribe(() => {
        this.dialogRef.close({listaProyectos: this.listaProyectos});
      });
  }

  onAgregarProyectoClick() {
    const editProjectDialogRef = this.dialog.open(CreateProjectDialogComponent, {
      autoFocus: true
    });

    editProjectDialogRef.afterClosed().subscribe(res => {
      
      if(res != undefined) {
        let nuevoProyecto: Proyecto = new Proyecto(0, res.newProject.newProjectName, res.newProject.newProjectDescription, res.newProject.newProjectLink, this.idPersona);
        this.proyectoService.crearNuevoProyecto(nuevoProyecto).subscribe(res => {
          nuevoProyecto = res;
          this.listaProyectos.push(nuevoProyecto);
        });
      }
    });
  }

  onEliminarProyectoEvent(proyectoAEliminar: Proyecto) {
    this.listaProyectos = this.listaProyectos.filter(item => item.id != proyectoAEliminar.id);
  }

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({listaProyectos: this.listaProyectos});
  }

}
