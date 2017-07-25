import { BookModel } from './../../models/book';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'priceFilter',
})
@Injectable()
export class PriceFilterPipe implements PipeTransform {

  transform(books: BookModel[], minPrice: number = 0, maxPrice: number = 100): any {
    if (books){
      let filtredBooks = books.filter(book => +book.price >= minPrice && +book.price <= maxPrice)
      return filtredBooks;
    }
  }
}
