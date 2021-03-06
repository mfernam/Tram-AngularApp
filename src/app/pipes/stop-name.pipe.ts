import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class StopNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }

}
