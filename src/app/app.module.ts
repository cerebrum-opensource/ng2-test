import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SearchFilterPipe} from './app-searchfilter.pipe';
import { OrderBy} from './app-order.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, SearchFilterPipe, OrderBy],
  bootstrap:    [ AppComponent ],
  providers: [SearchFilterPipe, OrderBy]
})
export class AppModule { }
