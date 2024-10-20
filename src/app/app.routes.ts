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
    title: 'About | Dean Luckham',
  },
  {
    path: 'cv',
    component: CvComponent,
    title: 'CV | Dean Luckham',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./blog/blog.routes')
        .then(m => m.BlogRoutes)
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default routeConfig;
