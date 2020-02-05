import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerantService } from '../service/gerant.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-ajout-gerant',
  templateUrl: './ajout-gerant.component.html',
  styleUrls: ['./ajout-gerant.component.scss']
})
export class AjoutGerantComponent implements OnInit {
  public magasin;
  constructor(private routes:Router, private toastr: ToastrService,private service:GerantService) { }
  listetpeUser;
  ngOnInit() {
    this.resetForm()
    this.magasin=1;
    this.service.getAllTypeUser().subscribe(data=>{
      this.listetpeUser=data;
      console.log(this.listetpeUser)  
    },err=>{
      console.log(err)});
  }
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
    AjouterGerant(form :NgForm){ 
    // console.log(form); 
      this.insertFormulaire(form);
    // this.resetForm(form);
    }
 
    insertFormulaire(form :NgForm){
this.service.insertGerant(form.value,this.magasin).subscribe(res=>{
 
  if(res['success']==false){this.bad(res['message']); this.resetForm(form);
}
 else{this.good(res['message']);  this.resetForm(form);
 this.routes.navigate(["home/listegerant"]);
}

},error1 => {console.log(error1)});

    }
good(message) {
  this.toastr.success(message,'gérant ajouté avec succes');

}
bad(message) {
  this.toastr.error(message,'Erreur');

}
}