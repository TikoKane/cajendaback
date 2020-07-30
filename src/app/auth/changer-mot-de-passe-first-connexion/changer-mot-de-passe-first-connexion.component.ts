import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-changer-mot-de-passe-first-connexion',
  templateUrl: './changer-mot-de-passe-first-connexion.component.html',
  styleUrls: ['./changer-mot-de-passe-first-connexion.component.scss']
})
export class ChangerMotDePasseFirstConnexionComponent implements OnInit {
  protected service: NbAuthService;
  protected options: {};
  protected cd: ChangeDetectorRef;
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  user: any;
  ngOnInit() {
    
  }

}
