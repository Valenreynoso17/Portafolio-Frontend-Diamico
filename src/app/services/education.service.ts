import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/Educacion';
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
export class EducationService {

  private baseApiUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  crearNuevaEducacion(nuevaEducacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.baseApiUrl + "educacion/crear", nuevaEducacion, httpOptionsWithAuth);
  }

  eliminar(educacion: Educacion): Observable<Educacion> {
    return this.http.delete<Educacion>(this.baseApiUrl + "educacion/eliminar/" + educacion.id, httpOptionsWithAuth);
  }

  editar(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.baseApiUrl + "educacion/editar", educacion, httpOptionsWithAuth);
  }
}
