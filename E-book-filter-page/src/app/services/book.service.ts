import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class BookService {

  constructor(private http: Http) { }

  getBooks() : Observable<any> {
    return this.http.get('./assets/data/books.json')
        .map((res) => {
          res.json();
          console.log(res.json());
        });           
  }
}
