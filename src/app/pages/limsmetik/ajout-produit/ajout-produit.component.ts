import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from '../service/categorie.service';
import { ProduitService } from '../service/produit.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {
  public magasin:1;
  constructor(private routes : Router,private toastr: ToastrService,private service:ProduitService,private serviceCat:CategorieService) { }
  listecategorie;
  ngOnInit() {
  
    this.resetForm()
    
    this.serviceCat.getAllCategorieByMagasin(1).subscribe(data=>{
      this.listecategorie=data;
      console.log(this.listecategorie)  
    },err=>{
      console.log(err)});
  }
  resetForm(form? :NgForm){
if(form!=null)
    form.resetForm();

    this.service.prod={
     
      libelle:'',
      categorie_id:0
    }
    }
    AjouterProduit(form :NgForm){ 
    // console.log(form); 
      this.insertFormulaire(form);
    // this.resetForm(form);
    }
 
    insertFormulaire(form :NgForm){
this.service.addProduit(form.value).subscribe(res=>{

  if(res['success']==false){this.bad(res['message']); this.resetForm(form);
}
 else{this.good(res['message']);  this.resetForm(form);
 this.routes.navigate(["home/listeProduit"]);
}

},error1 => {console.log(error1)});

    }
good(message) {
  this.toastr.success(message,'produit ajouté avec succes');

}
bad(message) {
  this.toastr.error(message,'le produit existe déjà');

}
}
