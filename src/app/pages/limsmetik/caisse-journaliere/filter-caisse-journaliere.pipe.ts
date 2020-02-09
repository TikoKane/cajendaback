import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCaisseJournaliere'
})
export class FilterCaisseJournalierePipe implements PipeTransform {
  public transform(values: any[], filterCaisseJournaliere: string): any[] {
    if (!values || !values.length) return [];
    if (!filterCaisseJournaliere) return values;
    // Filter items array, items which match will return true
    return values.filter(v => v.dateVente.toLowerCase().indexOf(filterCaisseJournaliere.toLowerCase()) !== -1);
  }

}
