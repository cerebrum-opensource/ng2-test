import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'searchFilterPipe',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any, searchText: any): any {
    if (searchText == null) {
      return items;
    }
    return items.filter(function(item: any){
      return item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}
