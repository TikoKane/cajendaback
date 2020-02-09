import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AchatProduitService} from "../service/achat-produit.service";
import {VenteProduitService} from "../service/vente-produit.service";
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {Contenue, Particulier} from "../../../users.model";

@Component({
  selector: 'ngx-vente-particulier',
  templateUrl: './vente-particulier.component.html',
  styleUrls: ['./vente-particulier.component.scss'],
})

export class VenteParticulierComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  categorie;tableau;montant; string;valeur;donnees;
  constructor(private fb: FormBuilder,private serviceAchat:AchatProduitService,private serviceVente:VenteProduitService, private toastr: NbToastrService, public router: Router) {
    this.serviceAchat.annulerAchat().subscribe(resp=>{this.reloadComponent();},error1 => {this.badd();});
  }
  test:string='0';
  particulier:Particulier ={
    telephone:'',
    nom:'',
    prenom:'',
    adresse:''
  };
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
    this.toastr.danger(message,"Erreur lors de l'ajout du produit");

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
    this.particulier.telephone='';
    this.particulier.adresse='';
    this.particulier.prenom='';
    this.particulier.nom='';

  }

  anullerVente() {
    this.serviceVente.annulerVente().subscribe(resp=>{this.reloadComponent();},error1 => {this.bad(error1);});
  }

  validervente() {
    this.serviceVente.validerventeParticulier(this.particulier).subscribe(resp=>{console.log(resp['idFacture']);console.log(resp);
      this.router.navigate(['/pages/limsmetik/facture',resp['idFacture']]);
      console.log(resp)},error1 => {console.log(error1)});
  }

  suprimer(produit_id: any) {
    this.serviceVente.deleteVenteProduit(produit_id).subscribe(resp=>{console.log(resp),this.reloadComponent()},error1 => {console.log(error1)});
    this.reloadComponent();
  }

  gotoAddParticulier() {
    return this.router.navigate(['/home/particulier']);
  }

  getParticulierbyTel($event: {}) {
    this.test=this.particulier.telephone;
    this.serviceVente.getClientBytel(this.test).subscribe(dataa=>{this.valeur=dataa; if(this.valeur['Client '])
    {
      this.particulier.adresse=this.valeur['Client '].adresseClient;
      this.particulier.nom=this.valeur['Client '].nomClient;
      this.particulier.prenom=this.valeur['Client '].prenomClient;
      this.particulier.telephone=this.valeur['Client '].telClient;
    }},error1 => {console.log(error1);});
  }
}
