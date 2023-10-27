import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-blog',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [CommonModule, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

}
