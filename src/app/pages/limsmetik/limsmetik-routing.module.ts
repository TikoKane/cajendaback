import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LimsmetikComponent } from './limsmetik.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import {AjoutGerantComponent} from './ajout-gerant/ajout-gerant.component';
import {AjoutCategorieComponent} from './ajout-categorie/ajout-categorie.component';
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import {ListeCategorieComponent} from './liste-categorie/liste-categorie.component';
import {ListeProduitComponent} from './liste-produit/liste-produit.component';
import {ListeGerantComponent} from './liste-gerant/liste-gerant.component';
import {AchatProduitComponent} from './achat-produit/achat-produit.component';
import {ChoixClientComponent} from './choix-client/choix-client.component';
import {VenteParticulierComponent} from './vente-particulier/vente-particulier.component';
import {VenteEntrepriseComponent} from './vente-entreprise/vente-entreprise.component';
import {VenteRapideComponent} from './vente-rapide/vente-rapide.component';
import {StockProduitComponent} from './stock-produit/stock-produit.component';
import {ListeAchatComponent} from './liste-achat/liste-achat.component';
import {CaisseJournaliereComponent} from './caisse-journaliere/caisse-journaliere.component';
import {CaisseMensuelleComponent} from './caisse-mensuelle/caisse-mensuelle.component';
import { RechercheFactureComponent } from './recherche-facture/recherche-facture.component';
import {FactureComponent} from "./facture/facture.component";
import {VoirProduitAcheterComponent} from "./voir-produit-acheter/voir-produit-acheter.component";
import {RechercheCaisseComponent} from "./recherche-caisse/recherche-caisse.component";
import {ProformatParticulierComponent} from "./proformat-particulier/proformat-particulier.component";
import {ProformatEntrepriseComponent} from "./proformat-entreprise/proformat-entreprise.component";
import {ChoixProformatComponent} from "./choix-proformat/choix-proformat.component";
import {PromoComponent} from "./promo/promo.component";

const routes: Routes = [
  {
    path: '',
    component: LimsmetikComponent,
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
      {
        path: 'achatProduit',
        component: AchatProduitComponent,
      },
      {
        path: 'factureProformat',
        component: ChoixProformatComponent,
      },
      {
        path: 'promo',
        component: PromoComponent,
      },
      {
        path: 'choixClient',
        component: ChoixClientComponent,
      },
      {
        path: 'venteParticulier',
        component: VenteParticulierComponent,
      },
      {
        path: 'venteEntreprise',
        component: VenteEntrepriseComponent,
      },
      {
        path: 'venteRapide',
        component: VenteRapideComponent,
      },
      {
        path: 'proformatParticulier',
        component: ProformatParticulierComponent,
      },
      {
        path: 'proformatEntreprise',
        component: ProformatEntrepriseComponent,
      },
      {
        path: 'stockProduit',
        component: StockProduitComponent,
      },
      {
        path: 'listeAchat',
        component: ListeAchatComponent,
      },
      {
        path: 'caisseJournaliere',
        component: CaisseJournaliereComponent,
      },
      {
        path: 'caisseMensuelle',
        component: CaisseMensuelleComponent,
      },
      {
        path: 'rechercheFacture',
        component: RechercheFactureComponent,
      },
      {
        path: 'rechercheCaisse',
        component: RechercheCaisseComponent,
      },
      {
        path: 'facture/:id',
        component: FactureComponent,
      },
      {
        path: 'voirproduitAcheter/:id',
        component: VoirProduitAcheterComponent
      },

    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
})
export class LimsmetikRoutingModule {
}

