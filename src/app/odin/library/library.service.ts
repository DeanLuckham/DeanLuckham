import {Injectable} from '@angular/core';

import {Book} from "./book";
import {Library} from "./library";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  library: Library = new Library()

  addBook(book: Book): void {
    this.library.addBook(book)
  }

  removeBook(title: string): void {
    this.library.removeBook(title)
  }

  async getBook(title: string): Promise<Book | undefined> {
    return await this.library.getBook(title)
  }

  async getBooks(): Promise<Book[]> {
    return await this.library.getBooks()
  }

  constructor() { }
}

