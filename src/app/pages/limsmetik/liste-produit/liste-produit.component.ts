import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent implements OnInit {
  public produit;

  private magasin:1;

  dataTable:any
  constructor(private service: ProduitService, private route: Router) { }

  ngOnInit() {
    this.service.getAllProduitByMagasin(1).subscribe((data) => {this.produit = data["Produits "]; console.log(this.produit)}, (err) => {console.log(err); });
  }


  ondelete(c) {
    this.route.navigate(["home/supprimerProduit",c]);

    }

  update(c) {
    this.route.navigate(["home/modifierProduit",c]);
  //  location.href="home/modifierGerant/"+c;
  }
}
