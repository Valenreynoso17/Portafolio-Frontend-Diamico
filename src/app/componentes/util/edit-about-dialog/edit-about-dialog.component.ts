import { Component, EventEmitter, Inject, Output, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit-about-dialog',
  templateUrl: './edit-about-dialog.component.html',
  styleUrls: ['./edit-about-dialog.component.css']
})
export class EditAboutDialogComponent {

  editForm: FormGroup;

  constructor(
    public dialogRef:MatDialogRef<EditAboutDialogComponent>,
    private formBuilder: FormBuilder,
    private personaService: PersonService,
    @Inject(MAT_DIALOG_DATA) public data: { textoAcercaDe: String }) { 

      this.editForm = this.formBuilder.group({
        personAboutControl: [data.textoAcercaDe, [Validators.required]]
      });

      this.dialogRef.backdropClick().subscribe(() => {
        this.dialogRef.close({cambio: false});
      });
      
  }

  edit(event: Event) {

    event.preventDefault;

    if (this.editForm.valid) {

      this.dialogRef.close({cambio: true, newValue:this.editForm.get("personAboutControl")?.value});

    } else {
      this.editForm.markAllAsTouched();
    }  
  }

  onCloseClick(): void {
    this.dialogRef.close({cambio: false});
  } 

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({cambio: false});
  }

}
