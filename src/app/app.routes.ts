import {Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CvComponent} from "./cv/cv.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Dean Luckham | Software Development Student',
  },
  {
    path: 'home',
    redirectTo: '',
  },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  //   title: 'Contact',
  // }
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'cv',
    component: CvComponent,
    title: 'CV',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog/blog.routes')
        .then(m => m.BlogRoutes)
  },
  {
    path: 'odin',
    loadChildren: () =>
      import('./odin/odin.routes')
        .then(m => m.OdinRoutes)
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default routeConfig;
