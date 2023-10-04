import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { SocialsComponent } from "./socials/socials.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    SocialsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
