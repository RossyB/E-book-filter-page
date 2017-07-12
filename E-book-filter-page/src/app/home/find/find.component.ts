import { SliderModule, RatingModule } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [SliderModule, RatingModule]
})
export class FindComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public rangeValues: number[];
  public rating: number;

  constructor() { }

  ngOnInit() {
    this.title = 'Жанр';
    this.subtitle = 'Кликнете на един или повече жанрове за да ги изберете.'
    this.rangeValues = [0, 100];
    this.rating = 0;
  }
  handleChange(e) {
    console.log(this.rangeValues);
  }

  handleRate(e){
    console.log(this.rating)
  }
  clearRate(e){
    console.log(this.rating)
  }

}
