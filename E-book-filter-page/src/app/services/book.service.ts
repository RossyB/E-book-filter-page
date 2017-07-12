import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class BookService {

  constructor(private _http: Http) { }

      getBooks() {
        return this._http.get('./../../app/data/books.json')
            .map((res: Response) => res.json());
      }
}
