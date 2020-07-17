import { Component } from '@angular/core';
import {OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { VenteProduitService } from '../limsmetik/service/vente-produit.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnDestroy{
  private alive = true;
 private totalJournaliere;
 private tiko;
  solarValue: number;
  lightCard: CardSettings = {
    title: 'Vente journalière',
    iconClass: 'nb-checkmark',
    type: 'warning',
  };
  rollerShadesCard: CardSettings = {
    title: 'Ventes mensuelle',
    iconClass: 'nb-checkmark-circle',
    type: 'info',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Achat en fcfa',
    iconClass: 'nb-bar-chart',
    type: 'success',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Vente en fcfa',
    iconClass: 'nb-bar-chart',
    type: 'danger',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'info',
      },
      {
        ...this.wirelessAudioCard,
        type: 'success',
      },
      {
        ...this.coffeeMakerCard,
        type: 'danger',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,private serviceVente: VenteProduitService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
  
  ngOnInit() {
    this.tiko ="Fall";
    this.serviceVente.getTotalJournaliere(localStorage.getItem('idmagasin')).subscribe(resp=>{this.totalJournaliere=resp; console.log(this.totalJournaliere)},error=>{console.log(error)});

  }
}

