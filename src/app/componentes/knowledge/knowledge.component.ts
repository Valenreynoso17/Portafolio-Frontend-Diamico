import { Component, Input } from '@angular/core';
import { Conocimiento } from 'src/app/model/Conocimiento';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CreateKnowledgeDialogComponent } from '../util/create-knowledge-dialog/create-knowledge-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent {

  @Input() idPersona: number = 0;
  @Input() listaConocimientos: Conocimiento[] = [];

  constructor(public authService: AuthorizationService, public dialog: MatDialog) { }

  onAgregarConocimientoClicked() {
    this.authService.isLoggedIn.subscribe(res => {
      if(res === true) {
        const createKnowledgeDialog = this.dialog.open(CreateKnowledgeDialogComponent, {
          data: { idPersona: this.idPersona },
          autoFocus: false
        });
    
        createKnowledgeDialog.afterClosed().subscribe(res => {
          if (res.seCreoConocimiento) {
            this.listaConocimientos.push(res.conocimientoCreado);
          }
        });
      }
    });
  }

  onConocimientoEliminadoEvent(conocimientoAEliminar: Conocimiento) {
    this.listaConocimientos = this.listaConocimientos.filter(item => item.id != conocimientoAEliminar.id);
  }
}
