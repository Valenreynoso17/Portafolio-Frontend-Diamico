import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditAboutDialogComponent } from '../util/edit-about-dialog/edit-about-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Input() acercaDe: String;
  @Output() aboutEditEvent = new EventEmitter<string>();

  constructor(public dialog:MatDialog, public authService: AuthorizationService) { }

  onEditEvent() {
    const editAboutDialogRef = this.dialog.open(EditAboutDialogComponent, {
      data: { textoAcercaDe: this.acercaDe },
      autoFocus: false
    })

    editAboutDialogRef.afterClosed().subscribe(res => {
      if(res.cambio) {
        console.log(res);
        this.aboutEditEvent.emit(res.newValue);
      }
    });

  }

}
