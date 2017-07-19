import { SliderModule, RatingModule } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { BookModel } from './../../models/book';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [SliderModule, RatingModule]
})
export class FindComponent implements OnInit {
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
  public foundedBooks: BookModel[];


  constructor(private http : Http) { }
  
  ngOnInit() {; 
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

    this.http.get('./assets/data/books.json').map((res) => 
        res.json()
      ).subscribe(data => {
        this.books = data;

        if (this.books.length == 1){
          this.resultSubtitle = `${this.books.length} резултат`; 
        } else {
          this.resultSubtitle = `${this.books.length} резултатa`; 
        }
    });
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

