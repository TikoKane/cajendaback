import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CaisseService} from "../service/caisse.service";

@Component({
  selector: 'ngx-recherche-facture',
  templateUrl: './recherche-facture.component.html',
  styleUrls: ['./recherche-facture.component.scss']
})
export class RechercheFactureComponent implements OnInit {

  constructor(private serviceCaisse:CaisseService,private route:Router) { }

  ngOnInit() {
  }


  validervente(value: any) {
    console.log(value.NumeroFacture);
    this.serviceCaisse.getFacturebyNum(value.NumeroFacture).subscribe(resp=>{console.log(resp);
      console.log(resp['facture'].id);
      this.route.navigate(['/pages/limsmetik/facture',resp['facture'].id]);
    },error1 => {console.log(error1)})
  }
}
