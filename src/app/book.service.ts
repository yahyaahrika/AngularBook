import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: string = "http://localhost:53446/api/books";
  Book: Book[];
  Books: Book;

  constructor(private http: HttpClient) { }
  
  getAllBook() {
    this.http.get(this.url).toPromise().then(
      result => {
        this.Book = result as Book[];
      }
    )
  }
  postBook() {
    return this.http.post(this.url, this.Books);
  }
  putBook() {
    return this.http.put(this.url + "/" + this.Books.id, this.Books);
  }

}
