export class Educacion {

    public periodo: String;

    constructor(
        public id: number,
        public nombre: String,
        public descripcion: String,
        public fechaInicio: Date,
        public fechaFin: Date,
        public actual: Boolean,
        public logo: String,
        public idPersona: number
    ) {
        this.actualizarPeriodo();
    }

    public actualizarPeriodo() {
        let fechaInicioConTimezone = new Date(this.fechaInicio);
        let timezoneOffset = fechaInicioConTimezone.getTimezoneOffset() * 60000;
    
        this.fechaInicio = new Date(fechaInicioConTimezone.getTime() + timezoneOffset);
    
        this.periodo = this.getMes(this.fechaInicio.getMonth() + 1) + " " +  this.fechaInicio.getFullYear().toString();
    
        if(this.actual) {
    
            this.periodo += " - Actualidad";
      
        } else {
      
            let fechaFinConTimezone = new Date(this.fechaFin);
            let timezoneOffset = fechaFinConTimezone.getTimezoneOffset() * 60000;
    
            this.fechaFin = new Date(fechaFinConTimezone.getTime() + timezoneOffset);
    
            this.periodo += " - " + this.getMes(this.fechaFin.getMonth() + 1) + " " +  this.fechaFin.getFullYear().toString();
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