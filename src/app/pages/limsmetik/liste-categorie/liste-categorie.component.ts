import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { SmartTableData } from '../../../@core/data/smart-table';
import { CategorieService } from '../service/categorie.service';
import { Router } from '@angular/router';
import {NbDialogService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ngx-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.scss']
})
export class ListeCategorieComponent implements OnInit {
  public categorie;


    constructor(private service: CategorieService, private route: Router,private dialogService: NbDialogService) { }
    ngOnInit() {
  
    
      this.service.getAllCategorieByMagasin(1).subscribe((data) => {this.categorie = data; console.log(this.categorie)}, (err) => {console.log(err); });
      
      
    }
    resetForm(form? :NgForm){
      if(form!=null)
          form.resetForm();
      
          this.service.cat={
           
            libelle:'',
            magasin_id:0
          }
          }
     //Pop Suppression Categorie
     openWithoutEscClose(dialogSup: TemplateRef<any>,idCat) {
   
      let CategorieId: any;
      CategorieId = idCat;
      let supCategorie: any;
      this.service.GetCategorieById(CategorieId).subscribe( data => {supCategorie = data; console.log(supCategorie)} , err => {console.log(err); } );
      this.dialogService.open(
        dialogSup,
        {
          context: 'this is some additional data passed to dialog',
          hasBackdrop: false,
        });
    }

    //Delete Categorie
    ondelete(c){
      console.log(c);
    this.service.DeleteCategorie(c).subscribe(res=>{
     console.log(res)}) ;
  
     }

     //Pop Modifier Categorie
     openWithoutEscClose2(dialog: TemplateRef<any>,idCat) {
      let idCategorie: number;
      idCategorie = idCat;
      let modifCategorie:any;
      this.service.GetCategorieById(idCategorie).subscribe((data) => {modifCategorie = data; console.log(modifCategorie)}, (err) => {console.log(err); });
      this.dialogService.open(
        dialog,
        {
          context: 'this is some additional data passed to dialog',
          closeOnEsc: false,
        });
    }

    //Supprimer Categorie
    ModifierGerant(form :NgForm){ 
      // console.log(form); 
        this.modiformulaire(form);
      this.resetForm(form);
      }
    modiformulaire(form :NgForm){
      this.service.updateCategorie(form.value,1).subscribe(res=> {
        if(res['success']==false){this.bad(res['message']); this.resetForm(form);
      }
       else{this.good(res['message']);  this.resetForm(form); 
      
      }
      
      },error1 => {console.log(error1)});
      
          }
      good(message) {
        this.toastr.success(message,'Categorie modifiée avec succes');
      
      }
      bad(message) {
        this.toastr.error(message,'Erreur');
      
      }
      }
      