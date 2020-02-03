import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Users} from '../../users.model';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


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
    this.authService.logout();
  }


  onLogin(value) {
    this.authService.login(this.u).subscribe(resp => {
      this.authService.saveToken(resp['token']
        , resp['user'].nom, resp['user'].prenom,
        resp['user'].typeUser_id, resp['magasin'].id, resp['magasin'].libelle, resp['user'].id);
     // let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/home';
      this.router.navigate(['pages/dashboard']);
    },
        error1 => {
      this.errorsmsg(error1['error'].message);
      this.u.login = '';
      this.u.password = '';
    });
    // console.log(value);
  }

  ngOnInit(): void {
  }


  errorsmsg(messages: string) {

    this.toastr.danger(messages, 'Error');

  }


}
