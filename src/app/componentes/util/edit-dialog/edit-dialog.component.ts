import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  bannerPictureUrl: string;
  profilePictureUrl: string;
  personName: string;
  personActualSituation: string;
  personLocation: string;
  personEmail: string;
  personPhoneNumber: string;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { 
        bannerPictureUrl: string,
        profilePictureUrl: string,
        personName: string,
        personActualSituation: string,
        personLocation: string,
        personEmail: string,
        personPhoneNumber: string}
    ) { 
      this.bannerPictureUrl = data.bannerPictureUrl;
      this.profilePictureUrl = data.profilePictureUrl;
      this.personName = data.personName;
      this.personActualSituation = data.personActualSituation;
      this.personLocation = data.personLocation;
      this.personEmail = data.personEmail;
      this.personPhoneNumber = data.personPhoneNumber;
    }

  
  onCloseClick(): void {
    this.dialogRef.close();
  }

  
}
