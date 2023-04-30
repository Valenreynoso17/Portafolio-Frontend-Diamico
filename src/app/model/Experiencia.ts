export class Experiencia {
    
    constructor(
        public id: number,
        public nombre: String,
        public descripcion: String,
        public fechaInicio: Date,
        public fechaFin: Date,
        public actual: Boolean,
        public logo: String
    ) {}
}