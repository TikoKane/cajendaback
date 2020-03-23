import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCaisseJournaliere'
})
@Pipe({
  name: 'orderBy'
})
export class FilterCaisseJournalierePipe implements PipeTransform {

  public transform(values: any[], filterCaisseMensuelle: string): any[] {
    if (!values || !values.length) return [];
    if (!filterCaisseMensuelle) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.nomClient.toLowerCase().indexOf(filterCaisseMensuelle.toLowerCase()) !== -1);
  }

}
