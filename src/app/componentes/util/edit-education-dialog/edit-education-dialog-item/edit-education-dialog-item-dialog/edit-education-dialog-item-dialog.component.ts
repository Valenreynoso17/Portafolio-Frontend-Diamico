import { Component, Inject, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/Educacion';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education-dialog-item-dialog',
  templateUrl: './edit-education-dialog-item-dialog.component.html',
  styleUrls: ['./edit-education-dialog-item-dialog.component.css']
})
export class EditEducationDialogItemDialogComponent {

  editForm: FormGroup;

  educacion: Educacion;

  constructor(
    public dialogRef: MatDialogRef<EditEducationDialogItemDialogComponent>,
    private formBuilder: FormBuilder,
    private educacionService: EducationService,
    @Inject(MAT_DIALOG_DATA) public data: { educacion: Educacion }
  ) { 

    this.educacion = data.educacion;

    this.editForm = this.formBuilder.group({
      educationNameControl: [this.educacion.nombre, [Validators.required]],
      educationDescriptionControl: [this.educacion.descripcion, [Validators.required]],
      educationStartDateControl: [this.educacion.fechaInicio, [Validators.required]],
      educationEndDateControl: [this.educacion.fechaFin],
      educationIsActualControl: [this.educacion.actual, [Validators.required]],
      educationLinkControl: [this.educacion.logo, [Validators.required]]
    });

    this.toggleFechaFin(this.educacion.actual);

    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({educacionEliminado: false});
    });
  }

  edit(event: Event) {

    event.preventDefault;

    if (this.editForm.valid) {

      this.educacion.nombre = this.editForm.get("educationNameControl")?.value;
      this.educacion.descripcion = this.editForm.get("educationDescriptionControl")?.value;
      this.educacion.fechaInicio = this.editForm.get("educationStartDateControl")?.value;
      this.educacion.actual = this.editForm.get("educationIsActualControl")?.value;
      this.educacion.fechaFin = (this.educacion.actual) ? null : this.editForm.get("educationEndDateControl")?.value;
      this.educacion.logo = this.editForm.get("educationLinkControl")?.value;

      this.actualizarPeriodo(this.educacion);

      this.dialogRef.close({
        educacionEliminado: false,
        educacionEditado: this.educacion
      });

    } else {
      this.editForm.markAllAsTouched();
    }  
  }

  toggleActual(event: any) {
    this.educacion.actual = event.checked;

    this.toggleFechaFin(this.educacion.actual);
  }

  toggleFechaFin(educacionEsActual: Boolean) {
    if (educacionEsActual) {
      this.editForm.get("educationEndDateControl")?.disable();
      this.editForm.controls['educationEndDateControl'].setValidators(this.educacion.actual ? null : [Validators.required]);
      this.editForm.controls['educationEndDateControl'].updateValueAndValidity();
    } else {
      this.editForm.get("educationEndDateControl")?.enable();
      this.editForm.controls['educationEndDateControl'].setValidators(this.educacion.actual ? null : [Validators.required]);
      this.editForm.controls['educationEndDateControl'].updateValueAndValidity();
    }
  }

  onEliminarClick() {
    this.educacionService.eliminar(this.educacion).subscribe(res => {
      this.dialogRef.close({educacionEliminado: true});
    });
  }

  onCloseClick(): void {
    this.dialogRef.close({educacionEliminado: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({educacionEliminado: false});
  }

  actualizarPeriodo(e: Educacion): void {
    let fechaInicioConTimezone = new Date(e.fechaInicio);
    let timezoneOffset = fechaInicioConTimezone.getTimezoneOffset() * 60000;

    e.fechaInicio = new Date(fechaInicioConTimezone.getTime() + timezoneOffset);

    e.periodo = this.getMes(e.fechaInicio.getMonth() + 1) + " " +  e.fechaInicio.getFullYear().toString();

    if(e.actual) {

      e.periodo += " - Actualidad";
  
    } else {
  
        let fechaFinConTimezone = new Date(e.fechaFin);
        let timezoneOffset = fechaFinConTimezone.getTimezoneOffset() * 60000;

        e.fechaFin = new Date(fechaFinConTimezone.getTime() + timezoneOffset);

        e.periodo += " - " + this.getMes(e.fechaFin.getMonth() + 1) + " " +  e.fechaFin.getFullYear().toString();
    } 
}

getMes(numero: number): String {

    let mes: String = "";

    switch(numero) {
      case 1: { mes = "Enero"; break; }
      case 2: { mes = "Febrero"; break; }
      case 3: { mes = "Marzo"; break; }
      case 4: { mes = "Abril"; break; }
      case 5: { mes = "Mayo"; break; }
      case 6: { mes = "Junio"; break; }
      case 7: { mes = "Julio"; break; }
      case 8: { mes = "Agosto"; break; }
      case 9: { mes = "Septiembre"; break; }
      case 10: { mes = "Octubre"; break; }
      case 11: { mes = "Noviembre"; break; }
      case 12: { mes = "Diciembre"; break; }
    }

    return mes;
  }
}
