import {Routes} from "@angular/router";

import {BlogComponent} from "./blog.component";
import {BlogDashComponent} from "./blog-dash/blog-dash.component";
import {BlogPostComponent} from "./blog-post/blog-post.component";

export const BlogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogDashComponent,
        title: "Blog | Dean Luckham",
      },
      // {
      //   path: 'tag/:tag',
      //   component: BlogDashComponent,
      // },
      {
        path: 'post/:id',
        component: BlogPostComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
