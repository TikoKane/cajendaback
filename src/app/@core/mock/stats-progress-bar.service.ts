import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';
import { VenteProduitService } from 'src/app/pages/limsmetik/service/vente-produit.service';

@Injectable()

export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Café',
      value: 572900,
      activeProgress: 100,
      description: 'Produit le mieux vendu',
    },
    {
      title: 'Lait',
      value: 6378,
      activeProgress: 70,
      description: 'Deuxiéme produit le mieux vendu',
    },
    {
      title: 'Sucre',
      value: 200,
      activeProgress: 55,
      description: 'Troisième produit le mieux vendu',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
  ngOnit(){

  }
}
