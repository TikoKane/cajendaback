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
    title: 'Gérants',
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
