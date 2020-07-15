import { Component, OnInit } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { NgForm } from '@angular/forms';
import {NbDialogService,
NbComponentStatus,
NbGlobalPosition,
NbGlobalPhysicalPosition,
NbToastrService
} from '@nebular/theme';
import {ToasterConfig} from 'angular2-toaster';
import { Gerant } from '../service/general.model';
@Component({
  selector: 'ngx-modifierdonneesgerant',
  templateUrl: './modifierdonneesgerant.component.html',
  styleUrls: ['./modifierdonneesgerant.component.scss']
})
export class ModifierdonneesgerantComponent implements OnInit {
  public modifGerant;
  public ger : Gerant;
  id;
  



  constructor(private service:GerantService) { }
 
  ngOnInit() {
    this.ger={
      email:'',
      login:'',
      nom:'',
      password:'',
      prenom:'',
      tel:'',
      typeUser_id:0,
    }
    this.id = localStorage.getItem('id');

    this.service.GetGerantById(this.id).subscribe((data) => {
      this.modifGerant = data;
     
    }, (err) => {
      console.log(err);
    });
  
  }

 

  


}
