import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/Educacion';
import { Experiencia } from 'src/app/model/Experiencia';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditKnowledgeDialogComponent } from '../util/edit-knowledge-dialog/edit-knowledge-dialog.component';
import { EditExperiencieDialogComponent } from '../util/edit-experiencie-dialog/edit-experiencie-dialog.component';
import { EditEducationDialogComponent } from '../util/edit-education-dialog/edit-education-dialog.component';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent {

  @Input() idPersona: number = 0;
  @Input() listaExperiencia: Experiencia[] = [];
  @Input() listaEducacion: Educacion[] = [];
  
  constructor(public authService: AuthorizationService, public dialog:MatDialog, private cd:ChangeDetectorRef) { }

  onExperienceEditEvent() {
    const editExperienceDialogRef = this.dialog.open(EditExperiencieDialogComponent, {
      data: { idPersona: this.idPersona, listaExperiencias: this.listaExperiencia },
      autoFocus: false
    });

    editExperienceDialogRef.afterClosed().subscribe(res => {
      this.listaExperiencia = res.listaExperiencia;
    });
  }

  onEducationEditEvent() {
    const editEducationDialogRef = this.dialog.open(EditEducationDialogComponent, {
      data: { idPersona: this.idPersona, listaEducacion: this.listaEducacion },
      autoFocus: false
    });

    editEducationDialogRef.afterClosed().subscribe(res => {
      this.listaEducacion = res.listaEducacion;
    });
  }
}
