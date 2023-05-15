import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/Experiencia';
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
export class ExperienceService {

  private baseApiUrl = "https://portafoliobackend-valenreynoso17.b4a.run/";

  constructor(private http:HttpClient) { }

  crearNuevaExperiencia(nuevaExperiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.baseApiUrl + "experiencia/crear", nuevaExperiencia, httpOptionsWithAuth);
  }

  eliminar(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.baseApiUrl + "experiencia/eliminar/" + experiencia.id, httpOptionsWithAuth);
  }

  editar(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.baseApiUrl + "experiencia/editar", experiencia, httpOptionsWithAuth);
  }
}
