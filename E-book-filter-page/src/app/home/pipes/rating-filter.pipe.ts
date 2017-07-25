import { BookModel } from './../../models/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingFilter'
})
export class RatingFilterPipe implements PipeTransform {

  transform(books: BookModel[], rating: number = 0): any {
    if (books){
      let filtredBooks = books.filter(book => +book.rating >= rating)
      return filtredBooks;
    }
  }
}
