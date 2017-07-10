import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public subtitle: string;

  constructor() { 
    
  }

  ngOnInit() {
    this.title = "Филтър - онлайн магазин за книги";
    this.subtitle = "Филтрирайте резултатите по жанр, цена рейтинг."
  }

}
