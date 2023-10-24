import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BlogComponent} from "./blog/blog.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {CvComponent} from "./cv/cv.component";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog',
    // loadComponent: () => import("./blog/blog.component").then(mod => mod.BlogComponent)
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
