import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-fillButton',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './fillButton.component.html',
  styleUrls: ['./fillButton.component.css']
})
export class FillButtonComponent {
  @Input() route?: string;
  @Input() href?: string;
  @Input() content?: string;

  constructor() {

  }
}
