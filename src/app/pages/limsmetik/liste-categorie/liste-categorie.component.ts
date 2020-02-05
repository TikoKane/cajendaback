import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { SmartTableData } from '../../../@core/data/smart-table';
import { CategorieService } from '../service/categorie.service';
import { Router } from '@angular/router';
import {NbDialogService } from '@nebular/theme';
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

    openWithoutEscClose(dialog: TemplateRef<any>) {
      this.dialogService.open(
        dialog,
        {
          context: 'this is some additional data passed to dialog',
          closeOnEsc: false,
        });
    }
  }
  