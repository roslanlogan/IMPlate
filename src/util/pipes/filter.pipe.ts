/**
 * Created by ykichouh on 7/02/2018.
 */

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.naam.toLowerCase().includes(searchText) || it.voornaam.toLowerCase().includes(searchText);
    });
  }
}
