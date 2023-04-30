import { Conocimiento } from "./Conocimiento";
import { Educacion } from "./Educacion";
import { Experiencia } from "./Experiencia";
import { Proyecto } from "./Proyecto";

export class Persona {
    
    constructor(
        public id: number,
        public nombre: String,
        public situacionActual: String,
        public ubicacion: String,
        public email: String,
        public telefono: String,
        public acercaDe: String,
        public linkGithub: String,
        public linkLinkedIn: String,
        public linkInstagram: String,
        public fotoPerfil: String,
        public fotoPortada: String,
        public listaEducacion: Educacion[],
        public listaProyectos: Proyecto[],
        public listaExperiencia: Experiencia[],
        public listaConocimiento: Conocimiento[]
    ) {}
}