import { Component } from '@angular/core';
import { ReverseFilterPipe } from './app-filter.pipe';
import { SearchFilterPipe } from './app-searchfilter.pipe';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent  {
  public name: string;
  public searchText: string;
  public list: any;
  public data: any;
  constructor(private  reverseFilterPipe: ReverseFilterPipe, private  searchFilterPipe: SearchFilterPipe) {
    this.searchText = '';
    this.name = 'Test Assignment';
    this.list = [{
      name: 'Jon',
      joining_date: '23/10/2015',
      age: 23
    },
      {
        name: 'Viki',
        joining_date: '24/01/2015',
        age: 20
      },
      {
        name: 'Abc',
        joining_date: '25/10/2015',
        age: 43
      }, {
        name: 'XYZ',
        joining_date: '28/10/2015',
        age: 21
      }
    ];
    let array = this.list;
    this.data = [];
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      this.data.push(element);
    }
    Array.prototype.push.apply(this.list, this.data);
  }
}
