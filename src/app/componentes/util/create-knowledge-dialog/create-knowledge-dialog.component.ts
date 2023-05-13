import { Component, HostListener, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Conocimiento } from 'src/app/model/Conocimiento';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-create-knowledge-dialog',
  templateUrl: './create-knowledge-dialog.component.html',
  styleUrls: ['./create-knowledge-dialog.component.css']
})
export class CreateKnowledgeDialogComponent {

  idPersona: number;

  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateKnowledgeDialogComponent>,
    private formBuilder: FormBuilder,
    private conocimientoService: KnowledgeService,
    @Inject(MAT_DIALOG_DATA) public data: { idPersona: number }
  ) {

    this.idPersona = data.idPersona;

    this.createForm = this.formBuilder.group({
      knowledgeNameControl: ["", [Validators.required]],
      knowledgeLinkControl: ["", [Validators.required]]
    });

    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({seCreoConocimiento: false});
    });
  }

  crear(event: Event) {

    event.preventDefault;

    if (this.createForm.valid) {

      let nuevoConocimiento = new Conocimiento(0, this.createForm.get("knowledgeNameControl")?.value, this.createForm.get("knowledgeLinkControl")?.value, this.idPersona);

      this.conocimientoService.crearNuevoConocimiento(nuevoConocimiento).subscribe(res => {
        this.dialogRef.close({seCreoConocimiento: true, conocimientoCreado: nuevoConocimiento});
      });

    } else {
      this.createForm.markAllAsTouched();
    }  
  }

  onCloseClick(): void {
    this.dialogRef.close({seCreoConocimiento: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({seCreoConocimiento: false});
  }
}
