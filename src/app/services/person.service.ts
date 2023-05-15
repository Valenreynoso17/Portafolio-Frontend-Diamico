import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
import { Persona } from '../model/Persona';


const httpOptionsWithoutAuth = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'http://localhost:8080/'
  })
}

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
export class PersonService {

  private baseApiUrl = "https://portafoliobackend-valenreynoso17.b4a.run/";

  constructor(private http:HttpClient) { }

  getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.baseApiUrl, httpOptionsWithoutAuth);
  }

  editar(persona: Persona): Observable<void> {
    return this.http.put<any>(this.baseApiUrl + "persona/editar", persona, httpOptionsWithAuth);
  }
  
}
