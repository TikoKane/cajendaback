import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AchatProduitService} from "../service/achat-produit.service";
import {VenteProduitService} from "../service/vente-produit.service";
import {Router} from "@angular/router";
import {NbToastrService} from "@nebular/theme";
import {Contenue, Entreprise} from "../../../users.model";

@Component({
  selector: 'ngx-vente-entreprise',
  templateUrl: './vente-entreprise.component.html',
  styleUrls: ['./vente-entreprise.component.scss'],
})

export class VenteEntrepriseComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  categorie;tableau;montant;string;valeur;
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
  entreprise:Entreprise ={
    telephone:'',
    raisonSocial:'',
    adresse:''
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
    this.entreprise.raisonSocial='';
    this.entreprise.adresse='';
    this.entreprise.telephone='';

  }

  anullerVente() {
    this.serviceVente.annulerVente().subscribe(resp=>{this.reloadComponent();},error1 => {this.bad(error1);});
  }

  validervente() {
    this.serviceVente.validerventeEntreprise(this.entreprise).subscribe(resp=>{console.log(resp),
      this.router.navigate(['/pages/limsmetik/facture',resp['idFacture']]);
    },error1 => {console.log(error1)});
    this.reloadComponent();
  }

  suprimer(produit_id: any) {
    this.serviceVente.deleteVenteProduit(produit_id).subscribe(resp=>{console.log(resp),this.reloadComponent()},error1 => {console.log(error1)});
    this.reloadComponent();
  }

  getEntrepriseByTel($event: Event) {
    this.test=this.entreprise.telephone;
    this.serviceVente.getClientBytel(this.test).subscribe(dataa=>{this.valeur=dataa; if(this.valeur['Client '])
    {
      this.entreprise.adresse=this.valeur['Client '].adresseClient;
      this.entreprise.raisonSocial=this.valeur['Client '].raisonSocialClient;
      this.entreprise.telephone=this.valeur['Client '].telClient;
    }},error1 => {console.log(error1);});

  }
}
