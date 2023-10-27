import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FillButtonComponent} from "../public/fillButton/fillButton.component";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-cv',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [
    CommonModule,
    RouterLink,
    FillButtonComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'CV of Dean Luckham, software development student'},
      {name: 'author', content: 'Dean Luckham'},
      {name: 'keywords', content: 'Software, Development, Computing, IT, CV, Curriculum, Vitae'}
    ])
  }
}
