import { Component, OnInit } from '@angular/core';
import { GerantService } from '../service/gerant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-liste-gerant',
  templateUrl: './liste-gerant.component.html',
  styleUrls: ['./liste-gerant.component.scss']
})
export class ListeGerantComponent implements OnInit {
  gerant:any ;
 
    constructor(private service: GerantService, private route: Router) { }
    ngOnInit() {
  
     
      this.service.getAllGerantByMagasin(1).subscribe((data) => {this.gerant = data; console.log(this.gerant)}, (err) => {console.log(err); });
    }
  }