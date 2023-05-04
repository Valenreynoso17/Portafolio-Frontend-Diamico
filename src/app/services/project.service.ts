import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Proyecto } from '../model/Proyecto';
import { Observable } from 'rxjs';

const httpOptionsWithAuth = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'http://localhost:8080/',
    'Authorization':localStorage['auth_token']
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseApiUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  crearNuevoProyecto(nuevoProyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.baseApiUrl + "proyecto/crear", nuevoProyecto, httpOptionsWithAuth);
  }

  eliminar(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.delete<Proyecto>(this.baseApiUrl + "proyecto/eliminar/" + proyecto.id, httpOptionsWithAuth);
  }

  editar(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.baseApiUrl + "proyecto/editar", proyecto, httpOptionsWithAuth);
  }
}
