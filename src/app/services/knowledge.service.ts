import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conocimiento } from '../model/Conocimiento';
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
export class KnowledgeService {

  private baseApiUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  crearNuevoConocimiento(nuevoConocimiento: Conocimiento): Observable<Conocimiento> {
    return this.http.post<Conocimiento>(this.baseApiUrl + "conocimiento/crear", nuevoConocimiento, httpOptionsWithAuth);
  }

  eliminar(conocimiento: Conocimiento): Observable<Conocimiento> {
    return this.http.delete<Conocimiento>(this.baseApiUrl + "conocimiento/eliminar/" + conocimiento.id, httpOptionsWithAuth);
  }

  editar(conocimiento: Conocimiento): Observable<Conocimiento> {
    return this.http.put<Conocimiento>(this.baseApiUrl + "conocimiento/editar", conocimiento, httpOptionsWithAuth);
  }
}
