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

}
