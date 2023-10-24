import {Routes} from "@angular/router";
import {LibraryComponent} from "./library/library.component";
import {OdinComponent} from "./odin.component";

export const OdinRoutes: Routes = [
  {
    path: '',
    component: OdinComponent,
    title: "Odin Project"
  },
  {
    path: 'library',
    component: LibraryComponent,
    title: 'Library'
  },
];
