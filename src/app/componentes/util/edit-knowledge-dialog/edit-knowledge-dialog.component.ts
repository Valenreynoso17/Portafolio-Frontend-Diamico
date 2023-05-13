import { Component, Inject, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Conocimiento } from 'src/app/model/Conocimiento';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-edit-knowledge-dialog',
  templateUrl: './edit-knowledge-dialog.component.html',
  styleUrls: ['./edit-knowledge-dialog.component.css']
})
export class EditKnowledgeDialogComponent {

  editForm: FormGroup;

  conocimiento: Conocimiento;

  constructor(
    public dialogRef: MatDialogRef<EditKnowledgeDialogComponent>,
    private formBuilder: FormBuilder,
    private conocimientoService: KnowledgeService,
    @Inject(MAT_DIALOG_DATA) public data: { conocimiento: Conocimiento }
  ) { 

    this.conocimiento = data.conocimiento;

    this.editForm = this.formBuilder.group({
      knowledgeNameControl: [this.conocimiento.nombre, [Validators.required]],
      knowledgeLinkControl: [this.conocimiento.logo, [Validators.required]]
    });

    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({cambio: false});
    });
  }

  edit(event: Event) {

    event.preventDefault;

    if (this.editForm.valid) {

      this.conocimiento.nombre = this.editForm.get("knowledgeNameControl")?.value;
      this.conocimiento.logo = this.editForm.get("knowledgeLinkControl")?.value;

      this.conocimientoService.editar(this.conocimiento).subscribe(res => {
        this.dialogRef.close({cambio: true});
      });

    } else {
      this.editForm.markAllAsTouched();
    }  
  }

  onEliminarClick() {
    this.conocimientoService.eliminar(this.conocimiento).subscribe(res => {
      this.dialogRef.close({seElimino: true, conocimientoEliminado: this.conocimiento});
    });
  }

  onCloseClick(): void {
    this.dialogRef.close({cambio: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({cambio: false});
  }

}
