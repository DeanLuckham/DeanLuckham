import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book} from "../book";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book?: Book
}
