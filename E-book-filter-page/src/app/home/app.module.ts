import { SliderModule, RatingModule } from 'primeng/primeng';
import { BookService } from './../services/book.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindComponent } from './find/find.component';
import { BooksListComponent } from './books-list/books-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindComponent,
    BooksListComponent,
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
