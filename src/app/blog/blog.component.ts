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
  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Blog of Dean Luckham, software development student studying BSc Computing & IT (Software) with the Open University'},
      {name: 'author', content: 'Dean Luckham'},
      {name: 'keywords', content: 'Software, Development, Computing, IT, Blog, Open, University, OU'}
    ])
  }
}
