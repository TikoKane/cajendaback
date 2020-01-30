import { NgModule } from '@angular/core';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule, NbListModule,
  NbRadioModule, NbRouteTabsetModule,
  NbSelectModule, NbStepperModule, NbTabsetModule, NbTreeGridModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LimsmetikRoutingModule } from './limsmetik-routing.module';
import { LimsmetikComponent } from './limsmetik.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { AjoutGerantComponent } from './ajout-gerant/ajout-gerant.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ListeGerantComponent } from './liste-gerant/liste-gerant.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import {DataTablesModule} from 'angular-datatables';
import { AchatProduitComponent } from './achat-produit/achat-produit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { ChoixClientComponent } from './choix-client/choix-client.component';
import { VenteRapideComponent } from './vente-rapide/vente-rapide.component';
import { VenteEntrepriseComponent } from './vente-entreprise/vente-entreprise.component';
import { VenteParticulierComponent } from './vente-particulier/vente-particulier.component';
import { StockProduitComponent } from './stock-produit/stock-produit.component';
import { ListeAchatComponent } from './liste-achat/liste-achat.component';
import { CaisseJournaliereComponent } from './caisse-journaliere/caisse-journaliere.component';
import { CaisseMensuelleComponent } from './caisse-mensuelle/caisse-mensuelle.component';
import { RechercheFactureComponent } from './recherche-facture/recherche-facture.component';

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
    LimsmetikRoutingModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbListModule,
    NbTreeGridModule,
    NbAccordionModule,
  ],
  declarations: [
    LimsmetikComponent,
    FormInputsComponent,
    AjoutGerantComponent,
    AjoutCategorieComponent,
    AjoutProduitComponent,
    ListeProduitComponent,
    ListeGerantComponent,
    ListeCategorieComponent,
    AchatProduitComponent,
    ChoixClientComponent,
    VenteRapideComponent,
    VenteEntrepriseComponent,
    VenteParticulierComponent,
    StockProduitComponent,
    ListeAchatComponent,
    CaisseJournaliereComponent,
    CaisseMensuelleComponent,
    RechercheFactureComponent,
  ],
})
export class LimsmetikModule { }
