import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private baseApiUrl = "http://localhost:8080";

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

   constructor(private http:HttpClient, private router: Router) { 
    const token = localStorage.getItem("auth_token");
    this._isLoggedIn.next(!!token);
   }

   login(email: string, password: string) {
     return this.http.post(this.baseApiUrl + "/autenticar", {id: null, email: email, password: password}, {responseType: 'text'})
          .pipe(
            tap(response => {
              if(response != "FAIL") {

                this._isLoggedIn.next(true);

                localStorage.setItem("auth_token", response);

              } else {
                alert("El email o usuario ingresado es incorrecto.")
              }
              
            })
          );
   }

  logout() {
    this._isLoggedIn.next(false);
    localStorage.removeItem("auth_token");
  }

  /* isLoggedIn(): boolean {
    return (localStorage.getItem("auth_token") !== null);
  } */
}
