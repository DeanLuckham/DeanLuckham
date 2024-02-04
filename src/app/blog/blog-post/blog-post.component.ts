import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";

import {Post} from "../post";
import {PostService} from "../post.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPostComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute)
  post: Post | undefined

  constructor(private postService: PostService, private titleService: Title) {
    const postID = parseInt(this.route.snapshot.params['id'], 10)
    this.post = this.postService.getPostByID(postID)
    if(this.post) {
      this.titleService.setTitle(this.post.title)
    } else {
      this.titleService.setTitle("Post Not Found")
    }
  }

  ngOnInit() {
    window.scrollTo({top: 0})
  }
}
