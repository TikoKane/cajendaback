import {Component, OnInit} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {NbMenuItem} from "@nebular/theme";
var fa=JSON.parse(localStorage.getItem('typeUser'));
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
        title: 'MENU',
        group: true,
      },
      {
        title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
      },
      {
        title: 'IoT Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
      },
      {
        hidden: fa,
        title: 'Gérant',
        icon: 'person-outline',
        children: [
          {
            title: 'Ajout  gérant',
            link: '/pages/limsmetik/ajoutGerant',
          },
          {
            title: 'Liste gérant',
            link: '/pages/limsmetik/listeGerant',
          },
        ],
      },
      {
    
        title: 'Catégorie et produit',
        icon: 'keypad-outline',
        children: [
          {
            title: 'Ajout catégorie',
            link: '/pages/limsmetik/ajoutCategorie',
          },
          {
            title: 'Liste catégorie',
            link: '/pages/limsmetik/listeCategorie',
          },
          {
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
        title: 'Gestion produit',
        icon: 'shopping-cart-outline',
        children: [
          {
            hidden: fa,
            title: 'Achat',
            link: '/pages/limsmetik/achatProduit',
          },
          {
            title: 'Vente',
            link: '/pages/limsmetik/choixClient',
          },
          {
            title: 'Stock',
            link: '/pages/limsmetik/stockProduit',
          },
          {
            hidden:fa,
            title: 'Voir les achats',
            link: '/pages/limsmetik/listeAchat',
          },
        ],
      },
      {
        title: 'Caisse',
        icon: 'browser-outline',
        children: [
          {
            title: 'Journalière',
            link: '/pages/limsmetik/caisseJournaliere',
          },
          {
            hidden:fa,
            title: 'Mensuelle',
            link: '/pages/limsmetik/caisseMensuelle',
          },
          {
            hidden:this.fa,
            title: 'Caisse par date',
            link: '/pages/limsmetik/rechercheCaisse',
          },
        ],
      },
      {
        title: 'Facture',
        icon: 'map-outline',
        children: [
          {
            title: 'Recherche facture',
            link: '/pages/limsmetik/rechercheFacture',
          },
        ],
      },
    ];
  }
}
