import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SmartTableData } from '../../../@core/data/smart-table';
import {Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
@Component({
  selector: 'ngx-caisse-mensuelle',
  templateUrl: './caisse-mensuelle.component.html',
  styleUrls: ['./caisse-mensuelle.component.scss']
})

export class CaisseMensuelleComponent implements OnInit {
  tableau;total;
  p:number=1;
filterString = '';
  constructor(private serviceCaiise :CaisseService ,private route:Router ) { }

  ngOnInit() {

    this.serviceCaiise.caissemensuelle(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.tableau=resp['caisse mensuelle']; }, error=> {console.log(error)});
    this.serviceCaiise.getTotalMontantMensuelle(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.total=resp['totale mensuelle'];}, error=> {console.log(error)});
  }


  gotoFacture(id) {
    this.route.navigate(['/pages/limsmetik/facture',id]);
  }


  isSimple(nomClient: any) {
    return nomClient=="anomyme"
  }

  isparticulier(prenomClient: any) {
    return prenomClient!="anomyme"
  }
}
