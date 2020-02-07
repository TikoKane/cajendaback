import { Component, OnInit } from '@angular/core';
import {AchatProduitService} from "../service/achat-produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-liste-achat',
  templateUrl: './liste-achat.component.html',
  styleUrls: ['./liste-achat.component.scss']
})

export class ListeAchatComponent implements OnInit {
  tableau;
  p:number=1;
  constructor(private serviceAchat:AchatProduitService,private rout:Router) { }

  ngOnInit() {

    this.serviceAchat.voirachat(localStorage.getItem('idmagasin')).subscribe(resp=>{this.tableau=resp['AchatProduit'];console.log(resp['AchatProduit'])},error1 => {console.log(error1)});

  }

  getAllproduitAchete(id) {
    console.log(id);
    return this.rout.navigate(["/pages/limsmetik/voirproduitAcheter",id]);
  }
}
