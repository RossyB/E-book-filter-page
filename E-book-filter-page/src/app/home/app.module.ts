import { SliderModule, RatingModule } from 'primeng/primeng';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BookService } from './../services/book.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindComponent } from './find/find.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindComponent,
  ],
  imports: [
    BrowserModule,
    SliderModule,
    RatingModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule { }
