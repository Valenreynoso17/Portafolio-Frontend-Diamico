import { Component, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-info-contact-dialog',
  templateUrl: './main-info-contact-dialog.component.html',
  styleUrls: ['./main-info-contact-dialog.component.css']
})
export class MainInfoContactDialogComponent {

  faTimes: any;
  telefonoSinEspacios: String = "";
  linkWhatsapp: String = "";
  linkEmail: String = "";

  constructor(
    public dialogRef: MatDialogRef<MainInfoContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {email: string, telefono: string}
    ) {

    this.faTimes = faTimes;
    this.telefonoSinEspacios = data.telefono.replaceAll(" ", "");
    this.linkEmail = "mailto: " + data.email;
    this.linkWhatsapp = "https://wa.me/" + this.telefonoSinEspacios;
    
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
