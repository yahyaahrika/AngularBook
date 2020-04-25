import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  constructor( public service:BookService) { }

  ngOnInit(): void {
    this.service.getAllBook();
  }
  fillData(item){
    console.log(item);
    this.service.Books.id=item.id;
    this.service.Books.author=item.author;
    this.service.Books.title=item.title;
    this.service.Books.NumberOfPages=item.numberOfPages;
    this.service.Books.PublishedAt=item.publishedAt;
  }
}
