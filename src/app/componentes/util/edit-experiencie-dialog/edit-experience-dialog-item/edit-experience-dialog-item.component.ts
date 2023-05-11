import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienceService } from 'src/app/services/experience.service';
import { EditExperienceDialogItemDialogComponent } from './edit-experience-dialog-item-dialog/edit-experience-dialog-item-dialog.component';

@Component({
  selector: 'app-edit-experience-dialog-item',
  templateUrl: './edit-experience-dialog-item.component.html',
  styleUrls: ['./edit-experience-dialog-item.component.css']
})
export class EditExperienceDialogItemComponent implements OnInit {

  @Input() experiencia: Experiencia;
  @Output() eliminarExperienciaEvent = new EventEmitter();
  @Output() editarExperienciaEvent = new EventEmitter();
  period: String = "";

  constructor(public dialog:MatDialog, private experienciaService: ExperienceService) {}

  ngOnInit(): void {

    this.calcularPeriod(this.experiencia);

  }

  onExperienciaClick() {
    const editExperienceDialogRef = this.dialog.open(EditExperienceDialogItemDialogComponent, {
      data: { experiencia: this.experiencia },
      autoFocus: false
    });

    editExperienceDialogRef.afterClosed().subscribe(res => {
      if(res.experienciaEliminado == true) {
        this.eliminarExperienciaEvent.emit(this.experiencia);
      } else if(res.experienciaEliminado == false && res.experienciaEditado != undefined) {
        this.calcularPeriod(res.experienciaEditado);
        this.experienciaService.editar(res.experienciaEditado).subscribe(res => {
          this.editarExperienciaEvent.emit(this.experiencia);
        })
      }
    });
  }

  calcularPeriod(experiencia: Experiencia) {
    let fechaInicioConTimezone = new Date(this.experiencia.fechaInicio);
    let timezoneOffset = fechaInicioConTimezone.getTimezoneOffset() * 60000;

    let fechaInicio = new Date(fechaInicioConTimezone.getTime() + timezoneOffset);

    this.period = this.getMes(fechaInicio.getMonth() + 1) + " " +  fechaInicio.getFullYear().toString();

    if(this.experiencia.actual) {

      this.period += " - Actualidad";

    } else {

      let fechaFinConTimezone = new Date(this.experiencia.fechaFin);
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
