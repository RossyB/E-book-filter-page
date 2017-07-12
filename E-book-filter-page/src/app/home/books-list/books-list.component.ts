import { Component, OnInit } from '@angular/core';

import { BookService } from './../../services/book.service'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: any;

  constructor(private _bookService : BookService) { 

  }

  ngOnInit() {
    this._bookService.getBooks().subscribe(response => this.books = response);;
    console.log(this.books);
  }

}
