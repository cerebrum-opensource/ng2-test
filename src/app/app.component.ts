import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment/moment';
import {SearchFilterPipe} from './app-searchfilter.pipe';
import { OrderBy } from './app-order.pipe';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  public name: string;
  public searchText: string;
  public list: any;
  public timer: any;
  public subscription: any;

  constructor(private  searchFilterPipe: SearchFilterPipe , private orderBy: OrderBy) {
    this.searchText = '';
    this.name = 'Test Assignment';
    this.list = [{
      name: 'Jon',
      joining_date: moment('23/10/2015', 'DD/MM/YYYY').format('DD/MM/YYYY'),
      age: 23
    },
      {
        name: 'Viki',
        joining_date: moment('24/01/2015', 'DD/MM/YYYY').format('DD/MM/YYYY'),
        age: 20
      },
      {
        name: 'Abc',
        joining_date: moment('25/10/2015', 'DD/MM/YYYY').format('DD/MM/YYYY'),
        age: 43
      }, {
        name: 'XYZ',
        joining_date: moment('28/10/2015', 'DD/MM/YYYY').format('DD/MM/YYYY'),
        age: 21
      }];


    this.timer = Observable.timer(1000 * 10, 1000 * 30);

    this.subscription = this.timer.subscribe((t: any) => {
      this.appendElements();
      this.setFormData();
    });
  }

  private appendElements() {
    let arrayLength = Object.keys(this.list).length;
    let oldElement = this.list[arrayLength - 4];
    let element = Object.assign({}, oldElement);
    element.age = element.age.toString().split('').reverse().join('');
    let nextDay = moment(element.joining_date, 'DD/MM/YYYY').add(1, 'days');
    element.joining_date = nextDay.format('DD/MM/YYYY');
    this.list.push(element);
  }

  private setFormData() {
    let arrayLength = Object.keys(this.list).length;
    if (arrayLength > 7) {
      this.subscription.unsubscribe();
    }
  }

  public changeSorting(columnName: string): void {
    let data = this.list;
    if (data.column === columnName) {
      data.descending = !data.descending;
    } else {
      data.column = columnName;
      data.descending = false;
    }
  }

  public convertSorting(): string {
    return this.list.descending ? '-' + this.list.column : this.list.column;
  }


}
