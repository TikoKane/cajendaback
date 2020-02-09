import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="MENU_ITEMS"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{
  fa:boolean=false;
  MENU_ITEMS: NbMenuItem[]=[];


  ngOnInit(): void {
    this.fa=JSON.parse(localStorage.getItem('typeUser'));
    this.MENU_ITEMS=[

      {
        title: 'Acceuil',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
      },
      {
        title: 'MENU',
        group: true,
      },
      {
        hidden: this.fa,
        title: 'Gerant',
        icon: 'person-outline',
        children: [
          {
            title: 'Ajout Gerant',
            link: '/pages/limsmetik/ajoutGerant',
          },
          {
            title: 'List Gerant',
            link: '/pages/limsmetik/listeGerant',
          },
        ],
      },
      {

        title: 'Categorie et Produit',
        icon: 'keypad-outline',
        children: [
          {
            hidden: this.fa,
            title: 'Ajout categorie',
            link: '/pages/limsmetik/ajoutCategorie',
          },
          {
            title: 'Liste categorie',
            link: '/pages/limsmetik/listeCategorie',
          },
          {
            hidden: this.fa,
            title: 'Ajout produit',
            link: '/pages/limsmetik/ajoutProduit',
          },
          {
            title: 'Liste produit',
            link: '/pages/limsmetik/listeProduit',
          },
        ],
      },
      {
        title: 'Gestion Produit',
        icon: 'shopping-cart-outline',
        children: [
          {
            hidden: this.fa,
            title: 'Achat Produit',
            link: '/pages/limsmetik/achatProduit',
          },
          {
            title: 'Vente produit',
            link: '/pages/limsmetik/choixClient',
          },
          {
            title: 'Produit En Stock',
            link: '/pages/limsmetik/stockProduit',
          },
          {
            hidden:this.fa,
            title: 'Voir les Achats',
            link: '/pages/limsmetik/listeAchat',
          },
        ],
      },
      {
        title: 'Caisse',
        icon: 'browser-outline',
        children: [
          {
            title: 'Caisse Journaliere',
            link: '/pages/limsmetik/caisseJournaliere',
          },
          {
            hidden:this.fa,
            title: 'Caisse Mensuelle',
            link: '/pages/limsmetik/caisseMensuelle',
          },
        ],
      },
      {
        title: 'Facture',
        icon: 'map-outline',
        children: [
          {
            title: 'Recherche Facture',
            link: '/pages/limsmetik/rechercheFacture',
          },
        ],
      },
    ];
  }
}
