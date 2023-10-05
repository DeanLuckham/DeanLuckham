import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FillButtonComponent} from "../public/fillButton/fillButton.component";

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

}
