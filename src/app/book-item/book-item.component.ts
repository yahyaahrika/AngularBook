import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styles: [
  ]
})
export class BookItemComponent implements OnInit {

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.Books = {
      id: 0,
      title: null,
      PublishedAt: null,
      author: null,
      NumberOfPages: 0

    }
  }
  submit() {
    if (this.bookService.Books.id == 0) {
      this.bookService.postBook().subscribe(res => {
        this.bookService.getAllBook();
      },
        error => {
          console.log(error);
        })
    }
    else {
      this.bookService.putBook().subscribe(res => {
        this.bookService.getAllBook();
      }, err => {
        console.error(err);
      });
    }

  }
 

}
