import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Proyecto } from '../model/Proyecto';
import { Observable } from 'rxjs';

const httpOptionsWithAuth = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'https://portafoliobackend-valenreynoso17.b4a.run/',
    'Authorization':localStorage['auth_token']
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseApiUrl = "https://portafoliobackend-valenreynoso17.b4a.run/";

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
