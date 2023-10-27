import {Book} from "./book";

export class Library {
  private books: Book[]

  constructor() {
    this.books = []
  }

  addBook(newBook: Book): void {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
  }

  removeBook(title: string): void {
    this.books = this.books.filter(b => b.title !== title)
  }

  async getBook(title: string): Promise<Book | undefined> {
    return this.books.find(b => b.title === title)
  }

  async getBooks(): Promise<Book[]> {
    return this.books
  }

  private isInLibrary(book: Book): boolean {
    return this.books.some(b => b.title === book.title)
  }
}
