import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainInfoContactDialogComponent } from './main-info-contact-dialog/main-info-contact-dialog.component';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditDialogComponent } from '../util/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  @Input() persona: Persona;

  bannerPictureUrl: String = "";
  profilePictureUrl: String = "";

  personName: String = "";
  personActualSituation: String = "";
  personLocation: String = "";
  personEmail: String = "";
  personPhoneNumber: String = "";

  constructor(public dialog: MatDialog, public authService: AuthorizationService) { }

  ngOnInit(): void {

    this.bannerPictureUrl = this.persona.fotoPortada;
    this.profilePictureUrl = this.persona.fotoPerfil;

    this.personName = this.persona.nombre;
    this.personActualSituation = this.persona.situacionActual;
    this.personLocation = this.persona.ubicacion;
    this.personEmail = this.persona.email;
    this.personPhoneNumber = this.persona.telefono;
    
  }

  openContactInformationDialog(): void {
    const mainInforContactDialogRef = this.dialog.open(MainInfoContactDialogComponent, {
      data: { email: this.personEmail, telefono: this.personPhoneNumber },
      autoFocus: false
    });
  }

  onEditEvent() {
    console.log("Main info edit event");

    const mainInforContactDialogRef = this.dialog.open(EditDialogComponent, {
      data: { 
        bannerPictureUrl: this.bannerPictureUrl,
        profilePictureUrl: this.profilePictureUrl,
        personName: this.personName,
        personActualSituation: this.personActualSituation,
        personLocation: this.personLocation,
        personEmail: this.personEmail,
        personPhoneNumber: this.personPhoneNumber},
      autoFocus: false
    });
  }
  
}
