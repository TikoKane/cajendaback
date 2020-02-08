import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AchatProduitService} from "../service/achat-produit.service";
import {VenteProduitService} from "../service/vente-produit.service";
import {ToastrService} from "ngx-toastr";
import {Contenue} from "../../../users.model";
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'ngx-vente-rapide',
  templateUrl: './vente-rapide.component.html',
  styleUrls: ['./vente-rapide.component.scss'],
})
export class VenteRapideComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  categorie;tableau;montant;
  constructor(private fb: FormBuilder,private serviceAchat:AchatProduitService,private serviceVente:VenteProduitService, private toastr: NbToastrService, public router: Router) {
    this.serviceAchat.annulerAchat().subscribe(resp=>{this.reloadComponent();},error1 => {this.badd();});
  }
  test:string='0';
  contenue:Contenue ={
    idcategorie:'',
    idproduit:'',
    quantite:'',
    pu:''
  };
  produit;
  ngOnInit() {
    this.serviceAchat.getAllcategorie(localStorage.getItem('idmagasin')).subscribe(data=>{this.categorie=data; console.log(data);},error1=>{console.log(error1);});
    this.serviceAchat.getAllproduitAjouter().subscribe(data=>{this.tableau=data['AjoutProduit '];console.log(data['AjoutProduit '])},error1 => {console.log(error1);});
    this.serviceAchat.getTotalMontantAchete().subscribe(data=>{this.montant=data['totalMontant'][0].total;console.log(data['totalMontant'])},error1 => {console.log(error1);});
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });

  }

  recuperation($event: Event) {
    this.test=this.contenue.idcategorie;
    this.serviceAchat.getAllproduitBycategorie(this.test).subscribe(dataa=>{this.produit=dataa;console.log(dataa);},error1 => {console.log(error1);});

  }
  good(message) {
    this.toastr.success(message,'success');

  }
  bad(message) {
    this.toastr.danger(message,'error');

  }
  badd() {
    this.toastr.danger("erreur",'error');

  }


  onLogin(f: NgForm) {
    this.serviceVente.insertintoAjoutProduit(this.contenue).subscribe(resp=>{ if(resp['succes']==false){this.bad(resp['message']);}else{this.good(resp['message']);}this.reloadComponent()},error1 => {console.log(error1)});
    this.serviceAchat.getTotalMontantAchete().subscribe(data=>{this.montant=data['totalMontant'][0].total;console.log(data['totalMontant'])},error1 => {console.log(error1);});
    this.reloadComponent();
  }

  private reloadComponent() {
    this.serviceAchat.getTotalMontantAchete().subscribe(data=>{this.montant=data;console.log(data)},error1 => {console.log(error1);});
    this.serviceAchat.getAllproduitAjouter().subscribe(data=>{this.tableau=data['AjoutProduit '];console.log(data['AjoutProduit '])},error1 => {console.log(error1);});
    this.serviceAchat.getTotalMontantAchete().subscribe(data=>{this.montant=data['totalMontant'][0].total;console.log(data['totalMontant'])},error1 => {console.log(error1);});
    this.contenue.idcategorie='';
    this.contenue.pu='';
    this.contenue.quantite='';
    this.contenue.idproduit='';

  }

  anullerVente() {
    this.serviceVente.annulerVente().subscribe(resp=>{this.reloadComponent();},error1 => {this.bad(error1);});
  }



  suprimer(produit_id: any) {
    this.serviceVente.deleteVenteProduit(produit_id).subscribe(resp=>{console.log(resp),this.reloadComponent()},error1 => {console.log(error1)});
    this.reloadComponent();
  }


  validerVenteRapide() {
   this.serviceVente.validerventeRapide().subscribe(resp=>{console.log(resp); this.good("vente reuissi avec success");this.reloadComponent();
   this.router.navigate(['/pages/limsmetik/facture',resp['idfacture']]);
    },error1 => {this.bad(error1)});

  }
}
