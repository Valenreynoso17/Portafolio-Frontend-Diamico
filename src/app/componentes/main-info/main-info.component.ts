import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainInfoContactDialogComponent } from './main-info-contact-dialog/main-info-contact-dialog.component';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditMainInfoDialogComponent } from '../util/edit-main-info-dialog/edit-main-info-dialog.component';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  @Input() persona: Persona;
  @Output() actualizarPersonaEvent = new EventEmitter();

  constructor(public dialog: MatDialog, public authService: AuthorizationService) { }

  ngOnInit(): void { }

  openContactInformationDialog(): void {
    const mainInforContactDialogRef = this.dialog.open(MainInfoContactDialogComponent, {
      data: { email: this.persona.email, telefono: this.persona.telefono },
      autoFocus: false
    });
  }

  onEditEvent() {
    const mainInforContactDialogRef = this.dialog.open(EditMainInfoDialogComponent, {
      data: { persona: this.persona },
      autoFocus: false
    });

    mainInforContactDialogRef.afterClosed().subscribe(seActualizoPersona => {
      if(seActualizoPersona) {
        this.actualizarPersonaEvent.emit();
      }
    });
  }

  
}
