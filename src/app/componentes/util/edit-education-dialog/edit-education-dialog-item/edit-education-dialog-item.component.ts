import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/Educacion';
import { EducationService } from 'src/app/services/education.service';
import { EditEducationDialogItemDialogComponent } from './edit-education-dialog-item-dialog/edit-education-dialog-item-dialog.component';

@Component({
  selector: 'app-edit-education-dialog-item',
  templateUrl: './edit-education-dialog-item.component.html',
  styleUrls: ['./edit-education-dialog-item.component.css']
})
export class EditEducationDialogItemComponent {

  @Input() educacion: Educacion;
  @Output() eliminarEducacionEvent = new EventEmitter();
  @Output() editarEducacionEvent = new EventEmitter();
  period: String = "";

  constructor(public dialog:MatDialog, private educacionService: EducationService) {}

  ngOnInit(): void {

    this.calcularPeriod(this.educacion);

  }

  onEducacionClick() {
    const editEducationDialogRef = this.dialog.open(EditEducationDialogItemDialogComponent, {
      data: { educacion: this.educacion },
      autoFocus: false
    });

    editEducationDialogRef.afterClosed().subscribe(res => {
      if(res.educacionEliminado == true) {
        this.eliminarEducacionEvent.emit(this.educacion);
      } else if(res.educacionEliminado == false && res.educacionEditado != undefined) {
        this.calcularPeriod(res.educacionEditado);
        this.educacionService.editar(res.educacionEditado).subscribe(res => {
          this.editarEducacionEvent.emit(this.educacion);
        })
      }
    });
  }

  calcularPeriod(educacion: Educacion) {
    let fechaInicioConTimezone = new Date(this.educacion.fechaInicio);
    let timezoneOffset = fechaInicioConTimezone.getTimezoneOffset() * 60000;

    let fechaInicio = new Date(fechaInicioConTimezone.getTime() + timezoneOffset);

    this.period = this.getMes(fechaInicio.getMonth() + 1) + " " +  fechaInicio.getFullYear().toString();

    if(this.educacion.actual) {

      this.period += " - Actualidad";

    } else {

      let fechaFinConTimezone = new Date(this.educacion.fechaFin);
      let timezoneOffset = fechaFinConTimezone.getTimezoneOffset() * 60000;

      let fechaFin = new Date(fechaFinConTimezone.getTime() + timezoneOffset);

      this.period += " - " + this.getMes(fechaFin.getMonth() + 1) + " " +  fechaFin.getFullYear().toString();
    }
  }

  getMes(numero: number): String {

    let mes: String = "";

    switch(numero) {
      case 1: {
        mes = "Enero";
        break;
      }
      case 2: {
        mes = "Febrero";
        break;
      }
      case 3: {
        mes = "Marzo";
        break;
      }
      case 4: {
        mes = "Abril";
        break;
      }
      case 5: {
        mes = "Mayo";
        break;
      }
      case 6: {
        mes = "Junio";
        break;
      }
      case 7: {
        mes = "Julio";
        break;
      }
      case 8: {
        mes = "Agosto";
        break;
      }
      case 9: {
        mes = "Septiembre";
        break;
      }
      case 10: {
        mes = "Octubre";
        break;
      }
      case 11: {
        mes = "Noviembre";
        break;
      }
      case 12: {
        mes = "Diciembre";
        break;
      }
    }

    return mes;
  }
}
