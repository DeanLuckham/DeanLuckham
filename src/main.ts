import {bootstrapApplication} from "@angular/platform-browser";
import {provideRouter} from "@angular/router";

import {AppComponent} from "./app/app.component";

import routeConfig from "./app/app.routes";
import {provideAnimations} from "@angular/platform-browser/animations";

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(
        routeConfig
      ),
      provideAnimations(),
    ],
  }
)
  .catch(err => console.error(err));
