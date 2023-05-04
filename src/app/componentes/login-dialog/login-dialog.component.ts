import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators} from '@angular/forms';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthorizationService) {
      
      this.loginForm = this.formBuilder.group({
        emailControl:["", [Validators.required, Validators.email]],
        passwordControl:["", [Validators.required, Validators.minLength(6)]]
      });
  }

  login(event: Event) {

    event.preventDefault;

    if (this.loginForm.valid) {
      this.authService.login(this.Email, this.Password).subscribe(res => {
        this.dialogRef.close();
        alert("Usuario ingresado con éxito");
        window.location.reload()
      })
    } else {
      this.loginForm.markAllAsTouched();
    }  
    
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  get Email() {
    return this.loginForm.get("emailControl")?.value;
  }

  get Password() {
    return this.loginForm.get("passwordControl")?.value;
  }
  
}
