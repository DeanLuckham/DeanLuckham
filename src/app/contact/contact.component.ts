import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings} from "ng-recaptcha";

import { environmentProd } from "../../environments/environment.prod";

@Component({
  selector: 'app-contact',
  standalone: true,
  host: {
    class: 'flex-col flex flex-grow'
  },
  imports: [
    CommonModule,
    FormsModule,
    RecaptchaModule
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      // siteKey: environmentProd.recaptcha.siteKey
    } as RecaptchaSettings
  }],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // public send(form: NgForm): void {
  //   if(form.invalid) {
  //     for(const control of Object.keys(form.controls)) {
  //       form.controls[control].markAsTouched()
  //     }
  //     return;
  //   }
  // }
}
