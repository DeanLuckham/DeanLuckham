import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import {Book} from "../book";
import {BookComponent} from "../book/book.component";
import {LibraryService} from "../library.service";

@Component({
  selector: 'app-library-dash',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './library-dash.component.html',
  styleUrls: ['./library-dash.component.css']
})
export class LibraryDashComponent implements OnInit {
  books: Book[] = []
  filteredBooks: Book[] = []

  constructor(private libraryService: LibraryService) {

  }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(): void {
    this.libraryService.getBooks().then(bookList => {
      this.books = bookList
      this.filteredBooks = bookList
    })
  }

  filterBooks(text: string): void {
    if (!text) {
      this.filteredBooks = this.books
    }

    this.filteredBooks = this.books.filter(
      book => book.title.toLowerCase().includes(text.toLowerCase())
    )
  }

  addBook(book: Book): void {
    this.libraryService.addBook(book)
    this.getBooks()
  }

  removeBook(book: Book) {
    this.libraryService.removeBook(book.title)
  }
}
