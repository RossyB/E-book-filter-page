import { BookService } from './services/book.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SliderModule, RatingModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FindComponent } from './home/find/find.component';
import { PriceFilterPipe } from './home/pipes/price-filter.pipe';


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
  providers: [ BookService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
