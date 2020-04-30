import { Component, OnInit, Injectable, Input } from '@angular/core';
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
import { RecupLoginPipe } from '../login/recup-login.pipe';

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
  @Input() recupLogin: RecupLoginPipe;
tik;

  message: string;
  users;
  u: Users= {
    login:'',
    password: '',
    magasin_id: 1,
  
  };
  user = {
    magasin_id: 1,
    confirmPassword:'',
    newPassword:''
  };
  constructor(private service: GerantService,public authService: AuthService, public router: Router, private toastr: NbToastrService) {

  }
  logout() {
    this.authService.logout2();
  }

  onLogin(f) {
    if(this.user.newPassword===this.user.confirmPassword){

   this.u.login=this.users.User.login;
  this.u.password=this.user.confirmPassword;

 this.authService.login2(this.u).subscribe(resp => {
   
     // let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
  
  this.service.updatePasswordGerant(localStorage.getItem('id') ,this.user.newPassword);
 this.router.navigate(['pages/limsmetik/choixClient']);
    },
        error1 => {
          console.log(error1);
   //     location.reload();
      this.errorsmsg();
     
      this.user.confirmPassword = '';
      this.user.newPassword = '';
    });
  }
  else{
    this.errorsmsgIdentiqueMotDePasse("Les deux Mots de passe ne sont pas identique");
 
  }
    
  }

  ngOnInit(): void {
  //  this.logout();
  this.service.GetGerantById(localStorage.getItem('id')).subscribe((data) => {
    this.users = data;
 
  }, (err) => {
    console.log(err);
  });
  }


  errorsmsg() {

    this.toastr.danger("Login ou Mot de Passe invalide", 'Error');

  }

  
  errorsmsgIdentiqueMotDePasse(messages: string) {

    this.toastr.danger(messages, 'Error');

  }


}
