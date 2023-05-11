import { Component, HostListener, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-create-experience-dialog',
  templateUrl: './create-experience-dialog.component.html',
  styleUrls: ['./create-experience-dialog.component.css']
})
export class CreateExperienceDialogComponent {

  idPersona: number;

  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateExperienceDialogComponent>,
    private formBuilder: FormBuilder,
    private experienciaService: ExperienceService,
    @Inject(MAT_DIALOG_DATA) public data: { idPersona: number }
  ) {

    this.idPersona = data.idPersona;

    this.createForm = this.formBuilder.group({
      experienceNameControl: ["", [Validators.required]],
      experienceDescriptionControl: ["", [Validators.required]],
      experienceStartDateControl: ["", [Validators.required]],
      experienceEndDateControl: [""],
      experienceIsActualControl: ["", [Validators.required]],
      experienceLinkControl: ["", [Validators.required]]
    });

    this.toggleFechaFin(false);

    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({seCreoExperiencia: false});
    });
  }

  create(event: Event) {

    event.preventDefault;

    if (this.createForm.valid) {

      let nuevaExperiencia = new Experiencia(0, this.createForm.get("experienceNameControl")?.value, this.createForm.get("experienceDescriptionControl")?.value, this.createForm.get("experienceStartDateControl")?.value, (this.createForm.get("experienceIsActualControl")?.value) ? null : this.createForm.get("experienceEndDateControl")?.value, this.createForm.get("experienceIsActualControl")?.value, this.createForm.get("experienceLinkControl")?.value, this.idPersona);

      this.dialogRef.close({seCreoExperiencia: true, experienciaCreada: nuevaExperiencia});

    } else {
      this.createForm.markAllAsTouched();
    }  
  }

  toggleActual(event: any) {

    this.toggleFechaFin(event.checked);
  }

  toggleFechaFin(experienciaEsActual: Boolean) {
    if (experienciaEsActual) {
      this.createForm.get("experienceEndDateControl")?.disable();
    } else {
      this.createForm.get("experienceEndDateControl")?.enable();
    }
    this.createForm.controls['experienceEndDateControl'].setValidators(experienciaEsActual ? null : [Validators.required]);
    this.createForm.controls['experienceEndDateControl'].updateValueAndValidity();
  }

  onCloseClick(): void {
    this.dialogRef.close({seCreoExperiencia: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({seCreoExperiencia: false});
  }
}
