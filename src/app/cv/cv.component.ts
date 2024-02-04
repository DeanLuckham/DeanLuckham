import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

import {FillButtonComponent} from "../public/fillButton/fillButton.component";

import {environment} from "../../environments/environment";
const s3Url: string = environment.s3Url

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

  protected readonly s3Url = s3Url;
}
