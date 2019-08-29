import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { AjoutGerantComponent } from './ajout-gerant/ajout-gerant.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ListeGerantComponent } from './liste-gerant/liste-gerant.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    DataTablesModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
  ],
  declarations: [
    FormsComponent,
    FormInputsComponent,
    AjoutGerantComponent,
    AjoutCategorieComponent,
    AjoutProduitComponent,
    ListeProduitComponent,
    ListeGerantComponent,
    ListeCategorieComponent,
  ],
})
export class FormsModule { }
