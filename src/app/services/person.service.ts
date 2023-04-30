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

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseApiUrl = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.baseApiUrl, httpOptionsWithoutAuth);
  }

  
}
