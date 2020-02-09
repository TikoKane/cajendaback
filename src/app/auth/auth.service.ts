import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Users} from '../users.model';
import {isBoolean} from "util";
@Injectable()
export class AuthService {

  value: Users;
  private host: string = 'http://lims.alwaysdata.net/api';
  isLoggedIn = false;
  role: number;

  // store the URL so we can redirect after logging in
  redirectUrl: string;  constructor(private myRoute: Router , private http: HttpClient, public router: Router) { }

  login(value: Users) {
    return this.http.post(
      this.host
      + '/login?login='
      + value.login
      + '&' + 'password=' + value.password + '&' + 'magasin_id=' + value.magasin_id,
      { observe : 'response'});
  }
  saveToken(jwt: string,
            nom: string, prenom: string, typeUser: number, idmagasin: number, magasin: string, iduser: number ) {
    localStorage.setItem('token', jwt);
    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
    this.role = typeUser;
    if(typeUser === 1)
    {
      localStorage.setItem('typeUser', 'false');
    }
    else
    {
      localStorage.setItem('typeUser', 'true');
    }

    localStorage.setItem('idmagasin', String(idmagasin));
    localStorage.setItem('magasin', magasin);
    localStorage.setItem('iduser', String(iduser));
    this.isLoggedIn = true;
  }
  isAdmin() {
    return this.role === 1;

  }
  isUser() {
    return this.role !== 1;
  }
  isAuthentificate() {
    return this.isLoggedIn;
  }

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('typeUser');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  sendToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedInn() {
    return this.getToken() !== null;
  }

}
