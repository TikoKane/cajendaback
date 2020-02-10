import { Component, OnInit, Injectable } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Users} from '../../users.model';
import {NbToastrService} from '@nebular/theme';
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router,public authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.authService.logout();
        }
      }
    });
  }
}
@Component({
  selector: 'ngx-first-connexion',
  templateUrl: './first-connexion.component.html',
  styleUrls: ['./first-connexion.component.scss']
})
export class FirstConnexionComponent implements OnInit {


  message: string;
  u: Users= {
    login: '',
    password: '',
    magasin_id: 1,
  };
  user = {
    login: '',
    password: '',
    idmagasin: '1',
  };
  constructor(public authService: AuthService, public router: Router, private toastr: NbToastrService) {

  }
  logout() {
    this.authService.logout2();
  }

  onLogin(value) {
    this.authService.login(this.u).subscribe(resp => {
      this.authService.saveToken(resp['token']
        , resp['user'].nom, resp['user'].prenom,
        resp['user'].typeUser_id, resp['magasin'].id, resp['magasin'].libelle, resp['user'].id);
     // let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
     if(resp['user'].nom=="ba"){
       
       this.router.navigate(['firsConnexion']);
     }
     else{
      this.router.navigate(['pages/dashboard']);
     }
    },
        error1 => {
      this.errorsmsg(error1['error'].message);
      this.u.login = '';
      this.u.password = '';
    });
    // console.log(value);
  }

  ngOnInit(): void {
    this.logout();
  }


  errorsmsg(messages: string) {

    this.toastr.danger(messages, 'Error');

  }


}
