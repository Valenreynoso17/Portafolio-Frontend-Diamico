import { Component, HostListener, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Proyecto } from 'src/app/model/Proyecto';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project-dialog-item-dialog',
  templateUrl: './edit-project-dialog-item-dialog.component.html',
  styleUrls: ['./edit-project-dialog-item-dialog.component.css']
})
export class EditProjectDialogItemDialogComponent {

  editForm: FormGroup;

  proyecto: Proyecto;

  constructor(
    public dialogRef: MatDialogRef<EditProjectDialogItemDialogComponent>,
    private formBuilder: FormBuilder,
    private proyectoService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: { proyecto: Proyecto }
  ) { 

    this.proyecto = data.proyecto;

    this.editForm = this.formBuilder.group({
      projectNameControl: [this.proyecto.nombre, [Validators.required]],
      projectDescriptionControl: [this.proyecto.descripcion, [Validators.required]],
      projectLinkControl: [this.proyecto.link, [Validators.required]]
    });

    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({proyectoEliminado: false});
    });
  }

  edit(event: Event) {

    event.preventDefault;

    if (this.editForm.valid) {

      this.proyecto.nombre = this.editForm.get("projectNameControl")?.value;
      this.proyecto.descripcion = this.editForm.get("projectDescriptionControl")?.value;
      this.proyecto.link = this.editForm.get("projectLinkControl")?.value;

      this.dialogRef.close({
        proyectoEliminado: false,
        proyectoEditado: this.proyecto
      });

    } else {
      this.editForm.markAllAsTouched();
    }  
  }

  onEliminarClick() {
    this.proyectoService.eliminar(this.proyecto).subscribe(res => {
      this.dialogRef.close({proyectoEliminado: true});
    });
  }

  onCloseClick(): void {
    this.dialogRef.close({proyectoEliminado: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({proyectoEliminado: false});
  }

}
