import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
    imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Personal and professional website and blog of Dean Luckham, software development student studying BSc Computing & IT (Software) with the Open University'},
      {name: 'author', content: 'Dean Luckham'},
      {name: 'keywords', content: 'Software, Development, Computing, IT, Open, University'}
    ])
  }
}
