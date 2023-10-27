import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BookComponent} from "./book/book.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-library',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [
    CommonModule,
    BookComponent,
    RouterOutlet,
  ],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent {

}
