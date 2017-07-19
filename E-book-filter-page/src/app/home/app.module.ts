import { SliderModule, RatingModule } from 'primeng/primeng';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindComponent } from './find/find.component';
import { PriceFilterPipe } from './pipes/price-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindComponent,
    PriceFilterPipe,
  ],
  imports: [
    BrowserModule,
    SliderModule,
    RatingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
