import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Inject, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience-dialog-item-dialog',
  templateUrl: './edit-experience-dialog-item-dialog.component.html',
  styleUrls: ['./edit-experience-dialog-item-dialog.component.css']
})
export class EditExperienceDialogItemDialogComponent {

  editForm: FormGroup;

  experiencia: Experiencia;

  constructor(
    public dialogRef: MatDialogRef<EditExperienceDialogItemDialogComponent>,
    private formBuilder: FormBuilder,
    private experienciaService: ExperienceService,
    @Inject(MAT_DIALOG_DATA) public data: { experiencia: Experiencia }
  ) { 

    this.experiencia = data.experiencia;

    this.editForm = this.formBuilder.group({
      experienceNameControl: [this.experiencia.nombre, [Validators.required]],
      experienceDescriptionControl: [this.experiencia.descripcion, [Validators.required]],
      experienceStartDateControl: [this.experiencia.fechaInicio, [Validators.required]],
      experienceEndDateControl: [this.experiencia.fechaFin],
      experienceIsActualControl: [this.experiencia.actual, [Validators.required]],
      experienceLinkControl: [this.experiencia.logo, [Validators.required]]
    });

    this.toggleFechaFin(this.experiencia.actual);

    this.dialogRef.backdropClick().subscribe(() => {
      this.dialogRef.close({experienciaEliminado: false});
    });
  }

  edit(event: Event) {

    event.preventDefault;

    if (this.editForm.valid) {

      this.experiencia.nombre = this.editForm.get("experienceNameControl")?.value;
      this.experiencia.descripcion = this.editForm.get("experienceDescriptionControl")?.value;
      this.experiencia.fechaInicio = this.editForm.get("experienceStartDateControl")?.value;
      this.experiencia.actual = this.editForm.get("experienceIsActualControl")?.value;
      this.experiencia.fechaFin = (this.experiencia.actual) ? null : this.editForm.get("experienceEndDateControl")?.value;
      this.experiencia.logo = this.editForm.get("experienceLinkControl")?.value;

      this.actualizarPeriodo(this.experiencia);

      this.dialogRef.close({
        experienciaEliminado: false,
        experienciaEditado: this.experiencia
      });

    } else {
      this.editForm.markAllAsTouched();
    }  
  }

  toggleActual(event: any) {
    this.experiencia.actual = event.checked;

    this.toggleFechaFin(this.experiencia.actual);
  }

  toggleFechaFin(experienciaEsActual: Boolean) {
    if (experienciaEsActual) {
      this.editForm.get("experienceEndDateControl")?.disable();
      this.editForm.controls['experienceEndDateControl'].setValidators(this.experiencia.actual ? null : [Validators.required]);
      this.editForm.controls['experienceEndDateControl'].updateValueAndValidity();
    } else {
      this.editForm.get("experienceEndDateControl")?.enable();
      this.editForm.controls['experienceEndDateControl'].setValidators(this.experiencia.actual ? null : [Validators.required]);
      this.editForm.controls['experienceEndDateControl'].updateValueAndValidity();
    }
  }

  onEliminarClick() {
    this.experienciaService.eliminar(this.experiencia).subscribe(res => {
      this.dialogRef.close({experienciaEliminado: true});
    });
  }

  onCloseClick(): void {
    this.dialogRef.close({experienciaEliminado: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({experienciaEliminado: false});
  }

  actualizarPeriodo(e: Experiencia): void {
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
