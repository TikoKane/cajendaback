import { Component, OnInit } from '@angular/core';
import {AchatProduitService} from "../service/achat-produit.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ngx-voir-produit-acheter',
  templateUrl: './voir-produit-acheter.component.html',
  styleUrls: ['./voir-produit-acheter.component.scss']
})
export class VoirProduitAcheterComponent implements OnInit {
  tableau;
  constructor(private serviceAchat:AchatProduitService,private  route:ActivatedRoute) { }

  ngOnInit() {
    let id: number;
    id = this.route.snapshot.params.id;
    console.log(id);
    this.serviceAchat.voirachatAjouter(id).subscribe(resp=>{this.tableau=resp;console.log(resp)},error=>{console.log(error)});


  }

}
