import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Conocimiento } from 'src/app/model/Conocimiento';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditKnowledgeDialogComponent } from '../../util/edit-knowledge-dialog/edit-knowledge-dialog.component';

@Component({
  selector: 'app-knowledge-item',
  templateUrl: './knowledge-item.component.html',
  styleUrls: ['./knowledge-item.component.css']
})
export class KnowledgeItemComponent {

  constructor(public authService: AuthorizationService, public dialog:MatDialog) {}

  @Input() conocimiento: Conocimiento;
  @Output() conocimientoEliminadoEvent = new EventEmitter();

  onEditButtonClicked() {
    this.authService.isLoggedIn.subscribe(res => {
      if(res === true) {
        const editKnowledgeDialog = this.dialog.open(EditKnowledgeDialogComponent, {
          data: { conocimiento: this.conocimiento },
          autoFocus: false
        });
    
        editKnowledgeDialog.afterClosed().subscribe(res => {
          if (res.seElimino) {
            this.conocimientoEliminadoEvent.emit(res.conocimientoEliminado);
          }
        });
      }
    });
  }
  
}
