import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment/moment';
import { SearchFilterPipe } from './app-searchfilter.pipe';
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

  /**
   *
   * @param searchFilterPipe
   * @param orderBy
   */
  constructor(private  searchFilterPipe: SearchFilterPipe, private orderBy: OrderBy) {
    this.searchText = '';
    this.name = 'Test Assignment';
    this.list = [{
      name: 'Jon',
      joining_date: moment('23/10/2015', 'DD/MM/YYYY').format(),
      age: 23
    },
      {
        name: 'Viki',
        joining_date: moment('24/01/2015', 'DD/MM/YYYY').format(),
        age: 20
      },
      {
        name: 'Abc',
        joining_date: moment('25/10/2015', 'DD/MM/YYYY').format(),
        age: 43
      }, {
        name: 'XYZ',
        joining_date: moment('28/10/2015', 'DD/MM/YYYY').format(),
        age: 21
      }];


    this.timer = Observable.timer(1000 * 60, 1000 * 60);

    this.subscription = this.timer.subscribe((t: any) => {
      this.appendElements();
      this.setFormData();
    });
  }

  /***
   * append elements into the array of objects
   */
  private appendElements() {
    let arrayLength = Object.keys(this.list).length;
    let oldElement = this.list[arrayLength - 4];
    let element = Object.assign({}, oldElement);
    element.age = element.age.toString().split('').reverse().join('');
    let nextDay = moment(element.joining_date).add(1, 'days');
    element.joining_date = nextDay.format();
    this.list.push(element);
  }

  /**
   * set data format inside arrays
   */
  private setFormData() {
    let arrayLength = Object.keys(this.list).length;
    if (arrayLength > 7) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * sort joining_date
   * @param columnName
   */
  public changeSorting(columnName: string): void {
    let data = this.list;
    if (data.column === columnName) {
      data.descending = !data.descending;
    } else {
      data.column = columnName;
      data.descending = false;
    }
  }

  /**
   * start sorting on click
   * @returns {string|((index:string)=>Locator)}
   */
  public convertSorting(): string {
    console.log(this.list.column);
    return this.list.descending ? '-' + this.list.column : this.list.column;
  }


}
