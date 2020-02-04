import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    hidden: true,
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
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
        title: 'Ajout categorie',
        link: '/pages/limsmetik/ajoutCategorie',
      },
      {
        title: 'Liste categorie',
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
    title: 'Gestion Produit',
    icon: 'shopping-cart-outline',
    children: [
      {
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
