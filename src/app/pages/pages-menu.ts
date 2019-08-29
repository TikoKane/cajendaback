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
    title: 'Menu',
    group: true,
  },
  {
    title: 'Gerant',
    icon: 'person-outline',
    children: [
      {
        title: 'Ajout Gerant',
        link: '/pages/forms/ajoutGerant',
      },
      {
        title: 'List Gerant',
        link: '/pages/forms/listeGerant',
      },
    ],
  },
  {
    title: 'Categorie et Produit',
    icon: 'keypad-outline',
    children: [
      {
        title: 'Ajout categorie',
        link: '/pages/forms/ajoutCategorie',
      },
      {
        title: 'Liste categorie',
        link: '/pages/forms/listeCategorie',
      },
      {
        title: 'Ajout produit',
        link: '/pages/forms/ajoutProduit',
      },
      {
        title: 'liste produit',
        link: '/pages/forms/listeProduit',
      },
    ],
  },
  {
    title: 'Gestion Produit',
    icon: 'shopping-cart-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Achat Produit',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Vente produit',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Produit En Stock',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Voir les Achats',
        link: '/pages/ui-features/typography',
      },
    ],
  },
  {
    title: 'Caisse',
    icon: 'browser-outline',
    children: [
      {
        title: 'Caisse Journaliere',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Caisse Mensuelle',
        link: '/pages/modal-overlays/window',
      },
    ],
  },
  {
    title: 'Facture',
    icon: 'map-outline',
    children: [
      {
        title: 'Recherche Facture',
        link: '/pages/extra-components/calendar',
      },
    ],
  },
  ,
];
