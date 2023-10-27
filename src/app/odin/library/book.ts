export class Book {
  constructor(
    public title: string = "Unknown",
    public author: string = "Unknown",
    public pages: number = 0,
    public read: boolean = false
  ) {
  }
}
