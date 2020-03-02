import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CaisseService} from "../service/caisse.service";

@Component({
  selector: 'ngx-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  nomClient: any;
  adresse: any;
  infoproduit: any;
  infoUser: any;
  MontantAPayer;
  infoFacture: any;
  infoClient: any;
  magasin: any;

  constructor(private servieCaisse:CaisseService,private  route:ActivatedRoute) { }

  ngOnInit() {
    this.magasin=localStorage.getItem('magasin');
    let id: number;
    id = this.route.snapshot.params.id;
    this.servieCaisse.getFacturebyId(id).subscribe(resp=>{
      this.infoFacture=resp['facture'];
      this.infoClient=resp['vente'];
      this.infoUser=resp['user'];
      this.infoproduit=resp['produits'];
      this.MontantAPayer=resp['totalVente'];
     },error1 => {console.log(error1)});
  }


  print(){
    //Popup($('.invoice')[0].outerHTML);
    function Popup(data)
    {
      window.print();
      return true;
    }
  }


  isParticulier() {
    return this.infoClient['client'].raisonSocialClient==null && this.infoClient['client'].prenomClient!=null && this.infoClient['client'].nomClient!='anonyme'
  }

  isEntreprise() {
    return this.infoClient['client'].raisonSocialClient!=null
  }
  isSimple(){
    return this.infoClient['client'].prenomClient==null && this.infoClient['client'].nomClient=='anonyme'
  }
}
