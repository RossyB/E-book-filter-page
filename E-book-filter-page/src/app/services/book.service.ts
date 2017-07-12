import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class BookService {

  constructor(private _http: Http) { }

      getBooks() : Observable<any> {
        return this._http.get('./assets/data/books.json')
            .map((res: Response) => {
              res.json();
              console.log(res);
            });
            
      }
}
