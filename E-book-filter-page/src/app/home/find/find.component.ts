import { PriceFilterPipe } from './../pipes/price-filter.pipe';
import { BookService } from './../../services/book.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { BookModel } from './../../models/book';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SliderModule, RatingModule } from 'primeng/primeng';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [SliderModule, RatingModule],
})
export class FindComponent implements OnInit, OnChanges {
  public genreTitle: string;
  public genreSubtitle: string;
  public priceTitle: string;
  public priceSubtitle: string;
  public ratingTitle: string;
  public ratingSubtitle: string;
  public resultTitle: string;
  public resultSubtitle: string;
  public books: BookModel[];
  public rangeValues: number[];
  public rating: number;
  public minPrice: number;
  public maxPrice: number;
  public filtredBooks: BookModel[];

  constructor(private bookService : BookService) {
    //this.books = [];
    //this.filtredBooks = [];
   }

     getBooks(): void {
      this.bookService.getBooks()
      .subscribe(data => {this.books = data;
      console.log(this.books);
      });      
  }

  ngOnChanges(){
    this.getBooks();
  }
  
  ngOnInit() {
    this.books = [];
    this.genreTitle = 'Жанр';
    this.genreSubtitle = 'Кликнете на един или повече жанрове за да ги изберете.';
    this.priceTitle = 'Цена'
    this.priceSubtitle= 'Изберете цена от до';
    this.ratingTitle = 'Рейтинг'
    this.ratingSubtitle= 'Изберете рейтинг';
    this.rangeValues = [0, 100];
    this.rating = 0;
    this.minPrice = this.rangeValues[0];
    this.maxPrice = this.rangeValues[1];
    this.resultTitle = 'Резултати';
    this.resultSubtitle = 'резултата';
    this.getBooks();
    console.log(this.books);
  }

  handleChange(e) {
    this.minPrice = this.rangeValues[0];
    this.maxPrice = this.rangeValues[1];
    console.log(this.rangeValues);
  }

  handleRate(e){
    console.log(this.rating)
  }
  clearRate(e){
    console.log(this.rating)
  }

}

