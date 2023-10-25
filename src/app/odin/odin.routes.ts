import {Routes} from "@angular/router";

import {LibraryComponent} from "./library/library.component";
import {OdinComponent} from "./odin.component";
import {BookDetailComponent} from "./library/book-detail/book-detail.component";
import {LibraryDashComponent} from "./library/library-dash/library-dash.component";

export const OdinRoutes: Routes = [
  {
    path: '',
    component: OdinComponent,
    title: "Odin Project"
  },
  {
    path: 'library',
    component: LibraryComponent,
    children: [
      {
        path: '',
        component: LibraryDashComponent,
        title: 'Library',
      },
      {
        path: 'detail/:title',
        component: BookDetailComponent,
        title: 'Library'
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];
