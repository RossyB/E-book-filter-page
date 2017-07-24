import { BookModel } from './../../models/book';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'priceFilter',
})
@Injectable()
export class PriceFilterPipe implements PipeTransform {

  transform(books: BookModel[], minPrice: number = 6, maxPrice: number = 100): any {
    debugger;
    return books.filter(book => {minPrice <= +book.price && +book.price <= maxPrice})
  }
}
