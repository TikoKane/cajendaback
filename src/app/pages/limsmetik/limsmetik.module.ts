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
import {ToastrComponent} from "../modal-overlays/toastr/toastr.component";
import {ModalOverlaysRoutingModule} from "../modal-overlays/modal-overlays-routing.module";
import {ModalOverlaysComponent} from "../modal-overlays/modal-overlays.component";
import {DialogComponent} from "../modal-overlays/dialog/dialog.component";
import {WindowComponent} from "../modal-overlays/window/window.component";
import {PopoversComponent} from "../modal-overlays/popovers/popovers.component";
import {TooltipComponent} from "../modal-overlays/tooltip/tooltip.component";
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
import {ModalOverlaysModule} from "../modal-overlays/modal-overlays.module";


@NgModule({
  imports: [

    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
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

  ],
})
export class LimsmetikModule { }
