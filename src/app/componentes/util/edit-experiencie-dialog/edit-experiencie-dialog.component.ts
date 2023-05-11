import { Component, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienceService } from 'src/app/services/experience.service';
import { CreateExperienceDialogComponent } from '../create-experience-dialog/create-experience-dialog.component';

@Component({
  selector: 'app-edit-experiencie-dialog',
  templateUrl: './edit-experiencie-dialog.component.html',
  styleUrls: ['./edit-experiencie-dialog.component.css']
})
export class EditExperiencieDialogComponent {

  idPersona: number;
  listaExperiencias: Experiencia[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditExperiencieDialogComponent>,
    public dialog: MatDialog,
    private experienciaService: ExperienceService,
    @Inject(MAT_DIALOG_DATA) public data: { idPersona: number, listaExperiencias: Experiencia[] }) { 

      this.idPersona = data.idPersona;
      this.listaExperiencias = data.listaExperiencias;

      this.dialogRef.backdropClick().subscribe(() => {
        this.dialogRef.close({listaExperiencia: this.listaExperiencias});
      });
  }

  onAgregarExperienciaClick() {
    const createExperienceDialogRef = this.dialog.open(CreateExperienceDialogComponent, {
      data: { idPersona: this.idPersona },
      autoFocus: true
    });

    createExperienceDialogRef.afterClosed().subscribe(res => {      
      if(res.seCreoExperiencia === true) {

        let nuevaExperiencia = res.experienciaCreada;
        this.experienciaService.crearNuevaExperiencia(res.experienciaCreada).subscribe(r => {
          nuevaExperiencia = r;
          this.listaExperiencias.unshift(nuevaExperiencia);
        });
      }
    });
  }

  onEliminarExperienciaEvent(experiencia: Experiencia) {
    this.listaExperiencias = this.listaExperiencias.filter(item => item.id != experiencia.id);
  }

  onEditarExperienciaEvent(experiencia: Experiencia) {
    // console.log(this.listaExperiencias.indexOf(experiencia));
  }

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({listaExperiencia: this.listaExperiencias});
  }

}
