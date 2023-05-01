import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from 'src/app/model/Persona';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-main-info-dialog',
  templateUrl: './edit-main-info-dialog.component.html',
  styleUrls: ['./edit-main-info-dialog.component.css']
})
export class EditMainInfoDialogComponent {

  persona: Persona;

  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditMainInfoDialogComponent>,
    private formBuilder: FormBuilder,
    private personaService: PersonService,
    @Inject(MAT_DIALOG_DATA) public data: { persona: Persona }) { 

      this.persona = data.persona;

      this.editForm = this.formBuilder.group({
        bannerPictureUrlControl: [data.persona.fotoPortada, [Validators.required]],
        profilePictureUrlControl: [data.persona.fotoPerfil, [Validators.required]],
        personNameControl: [data.persona.nombre, [Validators.required]],
        personActualSituationControl: [data.persona.situacionActual, [Validators.required]],
        personLocationControl: [data.persona.ubicacion, [Validators.required]],
        personEmailControl: [data.persona.email, [Validators.required, Validators.email]],
        personPhoneNumberControl: [data.persona.telefono, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]
      });
    }

  edit(event: Event) {

    event.preventDefault;

    if (this.editForm.valid) {

      this.persona.fotoPortada = this.editForm.get("bannerPictureUrlControl")?.value;
      this.persona.fotoPerfil = this.editForm.get("profilePictureUrlControl")?.value;
      this.persona.nombre = this.editForm.get("personNameControl")?.value;
      this.persona.situacionActual = this.editForm.get("personActualSituationControl")?.value;
      this.persona.ubicacion = this.editForm.get("personLocationControl")?.value;
      this.persona.email = this.editForm.get("personEmailControl")?.value;
      this.persona.telefono = this.editForm.get("personPhoneNumberControl")?.value;

      this.personaService.editar(this.persona).subscribe(resp => {
        this.dialogRef.close(true);
      })
    } else {
      this.editForm.markAllAsTouched();
    }  
  }

  onCloseClick(): void {
    this.dialogRef.close(false);
  }
}
