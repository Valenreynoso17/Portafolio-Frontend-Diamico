import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.css']
})
export class CreateProjectDialogComponent {

  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    private formBuilder: FormBuilder
  ) {

    this.createForm = this.formBuilder.group({
      projectNameControl: ["", [Validators.required]],
      projectDescriptionControl: ["", [Validators.required]],
      projectLinkControl: ["", [Validators.required]]
    })
  }

  create(event: Event) {

    event.preventDefault;

    if (this.createForm.valid) {

      this.dialogRef.close(
        {newProject:
          {newProjectName: this.createForm.get("projectNameControl")?.value,
           newProjectDescription: this.createForm.get("projectDescriptionControl")?.value,
           newProjectLink: this.createForm.get("projectLinkControl")?.value}
        });

    } else {
      this.createForm.markAllAsTouched();
    }  
  }

  onCloseClick(): void {
    this.dialogRef.close();
  } 

}
