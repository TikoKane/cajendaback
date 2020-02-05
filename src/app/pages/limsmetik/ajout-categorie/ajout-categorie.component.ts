import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from '../service/categorie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss'],
})
export class AjoutCategorieComponent implements OnInit {

  constructor(private routes:Router,private toastr: ToastrService,private service:CategorieService) { }
  ngOnInit() {
    this.resetForm()
  }
 
  
 
    AjouterCategorie(form :NgForm){ 
    // console.log(form); 
      this.insertFormulaire(form);
    // this.resetForm(form);
    }
    resetForm(form? :NgForm){
      if(form!=null)
          form.resetForm();
      
          this.service.cat={
           
            libelle:'',
            magasin_id:0
          }
          }
 
    insertFormulaire(form :NgForm){
this.service.addCategorie(form.value,localStorage.getItem('idmagasin')).subscribe(res=>{
 
 if(res['success']==false){this.bad(res['message']); this.resetForm(form);
}
 else{this.good(res['message']);  this.resetForm(form); 
 this.routes.navigate(["home/listecategorie"]);
}

},error1 => {console.log(error1)});

    }
good(message) {
  this.toastr.success(message,'categorie ajoutée avec succes');

}
bad(message) {
  this.toastr.error(message,'la catégorie existe déjà');

}
}
