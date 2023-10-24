import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibraryService} from "./library.service";
import {Book} from "./book";
import {BookComponent} from "./book/book.component";
import {FillButtonComponent} from "../../public/fillButton/fillButton.component";

@Component({
  selector: 'app-library',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [
    CommonModule,
    BookComponent,
    FillButtonComponent,
  ],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
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

  protected readonly Book = Book;
}
