import { BookService } from './services/book.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SliderModule, RatingModule, CheckboxModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FindComponent } from './home/find/find.component';
import { PriceFilterPipe } from './home/pipes/price-filter.pipe';
import { RatingFilterPipe } from './home/pipes/rating-filter.pipe';
import { GenreFilterPipe } from './home/pipes/genre-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindComponent,
    PriceFilterPipe,
    RatingFilterPipe,
    GenreFilterPipe,
  ],
  imports: [
    BrowserModule,
    SliderModule,
    RatingModule,
    CheckboxModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
