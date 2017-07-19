import { BookModel } from './../../models/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(books: any, minPrice: number = 6, maxPrice: number = 100): any {
    return books.filter(book => {minPrice <= +book.price && +book.price <= maxPrice})
  }

}
