import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Personal and professional website and blog of Dean Luckham, service desk engineer and software development student studying BSc Computing & IT (Software) with the Open University'},
      {name: 'author', content: 'Dean Luckham'},
      {name: 'keywords', content: 'Software, Development, Computing, IT, Service Desk, Open, University, West Sussex, Bognor Regis'}
    ])
  }
}
