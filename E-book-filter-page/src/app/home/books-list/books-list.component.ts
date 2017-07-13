import { BookService } from './../services/book.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  title: string;
  subtitle: string;
  books: any[];

  constructor(private http : Http) { 

  }

  ngOnInit() {
    this.title = 'Резултати';

    this.http.get('./assets/data/books.json').map((res) => 
        res.json()
      ).subscribe(data => {
        this.books = data
        if (this.books.length == 1){
          this.subtitle = `${this.books.length} резултат`; 
        } else {
          this.subtitle = `${this.books.length} резултатa`; 
        }
    });
  }
}
