import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Conocimiento } from 'src/app/model/Conocimiento';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditKnowledgeDialogComponent } from '../util/edit-knowledge-dialog/edit-knowledge-dialog.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent {

  @Input() listaConocimientos: Conocimiento[] = [];

  constructor(public authService: AuthorizationService, public dialog:MatDialog) { }

  onEditEvent() {
    const editAboutDialogRef = this.dialog.open(EditKnowledgeDialogComponent, {
      data: {  },
      autoFocus: false
    });

    editAboutDialogRef.afterClosed().subscribe(res => {
      if(res.cambio) {
        console.log(res);
      }
    });
  }
}
