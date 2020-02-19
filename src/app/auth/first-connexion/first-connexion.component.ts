import { Component, OnInit, Injectable } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Users} from '../../users.model';
import {NbToastrService} from '@nebular/theme';
import 'rxjs/add/operator/do';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateMotDePasseGerant } from '../../pages/limsmetik/service/general.model';
import { GerantService } from '../../pages/limsmetik/service/gerant.service';
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
tik;

  message: string;
  u: Users= {
    login: '',
    password: '',
    magasin_id: 1,
  
  };
  user = {
    login: '',
    password: '',
    magasin_id: 1,
    confirmPassword:'',
    newPassword:''
  };
  constructor(private service: GerantService,public authService: AuthService, public router: Router, private toastr: NbToastrService) {

  }
  logout() {
    this.authService.logout2();
  }

  onLogin(value) {
    if(this.user.newPassword===this.user.confirmPassword){
      
    this.authService.login2(this.user).subscribe(resp => {
      this.authService.saveToken(resp['token']
        , resp['user'].nom, resp['user'].prenom,
        resp['user'].typeUser_id, resp['magasin'].id, resp['magasin'].libelle, resp['user'].id);
     // let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
   this.service.updatePasswordGerant(resp['user'].id,this.user.newPassword).subscribe(
    (data) => {this.tik = data}, (err) => {console.log(err); }
   );
 //  console.log(this.service.updatePasswordGerant(resp['user'].id,this.user.newPassword));
   this.router.navigate(['pages/choixClient']);
    },
        error1 => {
          console.log(error1);
        location.reload();
      this.errorsmsg();
      this.user.login = '';
      this.user.password = '';
      this.user.confirmPassword = '';
      this.user.newPassword = '';
    });
  }
  else{
    this.errorsmsgIdentiqueMotDePasse("Les deux Mots de passe ne sont pas identique");
 
  }
    // console.log(value);
  }

  ngOnInit(): void {
    this.logout();
  }


  errorsmsg() {

    this.toastr.danger("Login ou Mot de Passe invalide", 'Error');

  }

  
  errorsmsgIdentiqueMotDePasse(messages: string) {

    this.toastr.danger(messages, 'Error');

  }


}
