import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SearchFilterPipe} from './app-searchfilter.pipe';
import { OrderBy} from './app-order.pipe';
import { Format} from './app.datetime';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, SearchFilterPipe, OrderBy , Format],
  bootstrap:    [ AppComponent ],
  providers: [SearchFilterPipe, OrderBy , Format]
})
export class AppModule { }
