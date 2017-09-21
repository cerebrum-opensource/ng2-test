import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ReverseFilterPipe} from './app-filter.pipe';
import { SearchFilterPipe} from './app-searchfilter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, ReverseFilterPipe, SearchFilterPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ReverseFilterPipe, SearchFilterPipe]
})
export class AppModule { }
