import { FormGroup } from '@angular/forms';
import { PriceFilterPipe } from './../pipes/price-filter.pipe';
import { BookService } from './../../services/book.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { BookModel } from './../../models/book';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NgForm } from '@angular/forms'
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
  public genres: Object[];
  public form: FormGroup;


  constructor(private bookService : BookService) {
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
    this.genres = [{ id: 1, name: 'Фентъзи' }, { id: 2, name: 'Драма' }, { id: 3, name: 'Трилър' }, { id: 4, name: 'Романи' },  { id: 5, name: 'Художествена литература' }, { id: 6, name: 'Исторически' },  { id: 6, name: 'Научна литература' }  ]
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
  onChange(e) {
    debugger;
    console.log('Event');
  }

}

