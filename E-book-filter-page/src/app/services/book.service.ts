import { BookModel } from './../models/book';
import { Injectable } from '@angular/core';
import { Headers, Http }  from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private booksUrl = './assets/data/books.json';

  constructor(private http: Http) { }

  getBooks(): Observable<BookModel[]> {
    return this.http
              .get(this.booksUrl)
              .map(response => response.json());

  }
}
