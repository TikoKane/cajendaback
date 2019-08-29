import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import {AjoutGerantComponent} from './ajout-gerant/ajout-gerant.component';
import {AjoutCategorieComponent} from './ajout-categorie/ajout-categorie.component';
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import {ListeCategorieComponent} from './liste-categorie/liste-categorie.component';
import {ListeProduitComponent} from './liste-produit/liste-produit.component';
import {ListeGerantComponent} from './liste-gerant/liste-gerant.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'inputs',
        component: FormInputsComponent,
      },
      {
        path: 'ajoutGerant',
        component: AjoutGerantComponent,
      },
      {
        path: 'ajoutCategorie',
        component: AjoutCategorieComponent,
      },
      {
        path: 'ajoutProduit',
        component: AjoutProduitComponent,
      },
      {
        path: 'listeCategorie',
        component: ListeCategorieComponent,
      },
      {
        path: 'listeProduit',
        component: ListeProduitComponent,
      },
      {
        path: 'listeGerant',
        component: ListeGerantComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

