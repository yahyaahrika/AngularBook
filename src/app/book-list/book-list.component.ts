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

}
