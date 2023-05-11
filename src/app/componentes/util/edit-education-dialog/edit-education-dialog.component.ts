import { Component, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/Educacion';
import { EducationService } from 'src/app/services/education.service';
import { CreateEducationDialogComponent } from '../create-education-dialog/create-education-dialog.component';

@Component({
  selector: 'app-edit-education-dialog',
  templateUrl: './edit-education-dialog.component.html',
  styleUrls: ['./edit-education-dialog.component.css']
})
export class EditEducationDialogComponent {

  idPersona: number;
  listaEducacion: Educacion[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditEducationDialogComponent>,
    public dialog: MatDialog,
    private educacionService: EducationService,
    @Inject(MAT_DIALOG_DATA) public data: { idPersona: number, listaEducacion: Educacion[] }) { 

      this.idPersona = data.idPersona;
      this.listaEducacion = data.listaEducacion;

      this.dialogRef.backdropClick().subscribe(() => {
        this.dialogRef.close({listaEducacion: this.listaEducacion});
      });
  }

  onAgregarEducacionClick() {
    const createEducationDialogRef = this.dialog.open(CreateEducationDialogComponent, {
      data: { idPersona: this.idPersona },
      autoFocus: true
    });

    createEducationDialogRef.afterClosed().subscribe(res => {      
      if(res.seCreoEducacion === true) {

        let nuevaEducacion = res.educacionCreada;
        this.educacionService.crearNuevaEducacion(res.educacionCreada).subscribe(r => {
          nuevaEducacion = r;
          this.listaEducacion.unshift(nuevaEducacion);
        });
      }
    });
  }

  onEliminarEducacionEvent(educacion: Educacion) {
    this.listaEducacion = this.listaEducacion.filter(item => item.id != educacion.id);
  }

  onEditarEducacionEvent(educacion: Educacion) {
    // console.log(this.listaEducacion.indexOf(educacion));
  }

  @HostListener('document:keydown.escape', ['window:keydown.esc'])
  onEscKeydown() {
    this.dialogRef.close({listaEducacion: this.listaEducacion});
  }
}
