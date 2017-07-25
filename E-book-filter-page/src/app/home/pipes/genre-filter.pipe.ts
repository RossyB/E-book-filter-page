import { BookModel } from './../../models/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(books: BookModel[], selectedGenre: string[]): any {
    let filtredBooks = [];
    let filtredByGenre = [];

    if (selectedGenre.length > 0){
      if (books){
        selectedGenre.forEach(genre => {
          filtredByGenre = books.filter(book => book.genre == genre);
          filtredByGenre.forEach(book => {filtredBooks.push(book);});
        });
      }
        return filtredBooks;
       
    } else {
      return books;
    }
  }
}
