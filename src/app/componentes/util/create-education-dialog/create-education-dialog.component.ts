import { Component, Inject, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/Educacion';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-create-education-dialog',
  templateUrl: './create-education-dialog.component.html',
  styleUrls: ['./create-education-dialog.component.css']
})
export class CreateEducationDialogComponent {

  idPersona: number;

  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateEducationDialogComponent>,
    private formBuilder: FormBuilder,
    private educacionService: EducationService,
    @Inject(MAT_DIALOG_DATA) public data: { idPersona: number }
  ) {

    this.idPersona = data.idPersona;

    this.createForm = this.formBuilder.group({
      educationNameControl: ["", [Validators.required]],
      educationDescriptionControl: ["", [Validators.required]],
      educationStartDateControl: ["", [Validators.required]],
      educationEndDateControl: [""],
      educationIsActualControl: ["", [Validators.required]],
      educationLinkControl: ["", [Validators.required]]
    });

    this.toggleFechaFin(false);

    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({seCreoEducacion: false});
    });
  }

  create(event: Event) {

    event.preventDefault;

    if (this.createForm.valid) {

      let nuevaEducacion = new Educacion(0, this.createForm.get("educationNameControl")?.value, this.createForm.get("educationDescriptionControl")?.value, this.createForm.get("educationStartDateControl")?.value, (this.createForm.get("educationIsActualControl")?.value) ? null : this.createForm.get("educationEndDateControl")?.value, this.createForm.get("educationIsActualControl")?.value, this.createForm.get("educationLinkControl")?.value, this.idPersona);

      this.dialogRef.close({seCreoEducacion: true, educacionCreada: nuevaEducacion});

    } else {
      this.createForm.markAllAsTouched();
    }  
  }

  toggleActual(event: any) {

    this.toggleFechaFin(event.checked);
  }

  toggleFechaFin(educacionEsActual: Boolean) {
    if (educacionEsActual) {
      this.createForm.get("educationEndDateControl")?.disable();
    } else {
      this.createForm.get("educationEndDateControl")?.enable();
    }
    this.createForm.controls['educationEndDateControl'].setValidators(educacionEsActual ? null : [Validators.required]);
    this.createForm.controls['educationEndDateControl'].updateValueAndValidity();
  }

  onCloseClick(): void {
    this.dialogRef.close({seCreoEducacion: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({seCreoEducacion: false});
  }
}
