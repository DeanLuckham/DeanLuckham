import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FillButtonComponent} from "../public/fillButton/fillButton.component";

import {environment} from "../../environments/environment";

@Component({
  selector: 'app-cv',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [
    CommonModule,
    FillButtonComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {

  protected readonly s3Url = environment.s3Url;
}
