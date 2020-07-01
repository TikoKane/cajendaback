import { NgModule } from '@angular/core';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbDialogModule, NbIconModule,
  NbInputModule, NbListModule, NbPopoverModule,
  NbRadioModule, NbRouteTabsetModule,
  NbSelectModule, NbStepperModule, NbTabsetModule, NbTooltipModule, NbTreeGridModule,
  NbUserModule, NbWindowModule,
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
import {CommonModule} from "@angular/common";
import { FactureComponent } from './facture/facture.component';
import { VoirProduitAcheterComponent } from './voir-produit-acheter/voir-produit-acheter.component';
import { FilterGerantPipe } from './liste-gerant/filter-gerant.pipe';
import { FilterCategoriePipe } from './liste-categorie/filter-categorie.pipe';
import { FilterProduitPipe } from './liste-produit/filter-produit.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterStockPipe } from './stock-produit/filter-stock.pipe';
import { FilterCaisseJournalierePipe } from './caisse-journaliere/filter-caisse-journaliere.pipe';
import { FilterCaisseMensuellePipe } from './caisse-mensuelle/filter-caisse-mensuelle.pipe';
import { FilterListeAchatPipe } from './liste-achat/filter-liste-achat.pipe';
import {NgxPrintModule} from "ngx-print";
import { RechercheCaisseComponent } from './recherche-caisse/recherche-caisse.component';
import {NbDateFnsDateModule} from "@nebular/date-fns";
import {NbMomentDateModule} from "@nebular/moment";
import { ChoixProformatComponent } from './choix-proformat/choix-proformat.component';
import { ProformatEntrepriseComponent } from './proformat-entreprise/proformat-entreprise.component';
import { ProformatParticulierComponent } from './proformat-particulier/proformat-particulier.component';
import { PromoComponent } from './promo/promo.component';
import { ChoixAchatComponent } from './choix-achat/choix-achat.component';
import { AchatFournisseurComponent } from './achat-fournisseur/achat-fournisseur.component';


@NgModule({
  imports: [

    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbMomentDateModule,
    //NbDateFnsDateModule.forChild({ format: 'dd/MM/yyyy' }),
    NbDateFnsDateModule.forChild({ format: 'dd.MM.yyyy' }),
    NbDatepickerModule,
    NbPopoverModule,
    NbTooltipModule,
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
    CommonModule,
    NgxPaginationModule,
    NgxPrintModule,
  ],
  declarations:[
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
    FactureComponent,
    VoirProduitAcheterComponent,
    FilterGerantPipe,
    FilterCategoriePipe,
    FilterProduitPipe,
    FilterStockPipe,
    FilterCaisseJournalierePipe,
    FilterCaisseMensuellePipe,
    FilterListeAchatPipe,
    RechercheCaisseComponent,
    ChoixProformatComponent,
    ProformatEntrepriseComponent,
    ProformatParticulierComponent,
    PromoComponent,
    ChoixAchatComponent,
    AchatFournisseurComponent,

  ],
})
export class LimsmetikModule { }
