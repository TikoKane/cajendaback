import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SmartTableData } from '../../../@core/data/smart-table';
import {Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";
@Component({
  selector: 'ngx-caisse-journaliere',
  templateUrl: './caisse-journaliere.component.html',
  styleUrls: ['./caisse-journaliere.component.scss']
})

export class CaisseJournaliereComponent implements OnInit {
  tableau;total;
  p:number=1;
filterString = '';
  constructor(private serviceCaiise :CaisseService,private route:Router  ) { }

  ngOnInit() {

    this.serviceCaiise.caissejournaliere(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.tableau=resp['caisse journaliere ']; }, error=> {console.log(error)});
    this.serviceCaiise.getTotalMontantJournalier(localStorage.getItem('idmagasin')).subscribe(resp=>{ this.total=resp['total journaliere '][0].total;}, error=> {console.log(error)});
  }

  gotoFacture(id) {
    this.route.navigate(['/pages/limsmetik/facture',id]);
  }

  deleteFacture(id: any) {
    
  }
}
