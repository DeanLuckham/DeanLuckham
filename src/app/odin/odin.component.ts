import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-odin',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [CommonModule, RouterOutlet],
  templateUrl: './odin.component.html',
  styleUrls: ['./odin.component.css']
})
export class OdinComponent {

}
