import {Component} from '@angular/core';
import {SearchFilterPipe} from './app-searchfilter.pipe';
import {Observable} from 'rxjs/Rx';

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

  constructor(private  searchFilterPipe: SearchFilterPipe) {
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
      }];


    this.timer = Observable.timer(1000 * 10, 1000 * 20);

    this.subscription = this.timer.subscribe(t => {
      this.appendElements()
      this.setFormData();
    });
  }

  private appendElements() {
    let arrayLength = Object.keys(this.list).length;
    let oldElement = this.list[arrayLength - 4];
    let element = Object.assign({}, oldElement);
    element.age = element.age.toString().split('').reverse().join('');
    this.list.push(element);
  }

  private setFormData() {
    let arrayLength = Object.keys(this.list).length;
    if (arrayLength > 7) {
      this.subscription.unsubscribe();
    }
  }


}
