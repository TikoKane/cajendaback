import { Component, OnInit, TemplateRef } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-liste-gerant',
  templateUrl: './liste-gerant.component.html',
  styleUrls: ['./liste-gerant.component.scss']
})
export class ListeGerantComponent implements OnInit {
  gerant:any ;
  listetpeUser;
private magasin:string;
  p:number=1;
    
    constructor(private service: GerantService, private route: Router,private dialogService: NbDialogService) { }
    ngOnInit() {
      this.magasin=localStorage.getItem('idmagasin');
      this.service.getAllGerantByMagasin(this.magasin).subscribe((data) => {this.gerant = data; console.log(this.gerant)}, (err) => {console.log(err); });
      this.resetForm()
      this.service.getAllTypeUser().subscribe(data=>{
        this.listetpeUser=data;
        console.log(this.listetpeUser)  
      },err=>{
        console.log(err)});
    }

    //Pop Suppression
    openWithoutEscClose(dialogSup: TemplateRef<any>,idGer) {
      let id: number;
      let GerantId: any;
      id = idGer;
      GerantId = id;
      this.service.GetGerantById(GerantId).subscribe( data => {this.gerant = data; console.log(this.gerant)} , err => {console.log(err); } );
      this.dialogService.open(
        dialogSup,
        {
          context: 'this is some additional data passed to dialog',
          hasBackdrop: false,
        });
    }

    //Delete Gerant
    ondelete(c){
      console.log(c);
    this.service.deleteGer(c).subscribe(res=>{
     console.log(res)}) ;
  
     }

     //Modification ==$ reset Formulaire
    resetForm(form? :NgForm){
      if(form!=null)
          form.resetForm();
      
          this.service.ger={
           
            nom:'',
            prenom:'',
            email:'',
            password:'',
            tel:'',
            typeUser_id:0,
            login:''
          }
          }
    


  openWithoutEscClose2(dialog: TemplateRef<any>,idGer) {
    let idGerant: number;
    idGerant = idGer;
    let modifGerant:any;
    this.service.GetGerantById(idGerant).subscribe((data) => {modifGerant = data; console.log(modifGerant)}, (err) => {console.log(err); });
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnEsc: false,
      });
  }

  ModifierGerant(form :NgForm){ 
    // console.log(form); 
      this.modiformulaire(form);
    // this.resetForm(form);
    }
  modiformulaire(form :NgForm){


  
  
  }
}
  
