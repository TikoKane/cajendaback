import { NbMenuItem } from '@nebular/theme';


var fa=JSON.parse(localStorage.getItem('typeUser'));

export var MENU_ITEMS: NbMenuItem[] = [

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
    hidden: fa,
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
        hidden: fa,
        title: 'Ajout categorie',
        link: '/pages/limsmetik/ajoutCategorie',
      },
      {
        title: 'Liste categorie',
        link: '/pages/limsmetik/listeCategorie',
      },
      {
        hidden: fa,
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
        hidden: fa,
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
        hidden:fa,
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
        hidden:fa,
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
