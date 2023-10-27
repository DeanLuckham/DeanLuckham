import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage, Location} from '@angular/common';

import {Post} from "../post";
import {PostService} from "../post.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-blog-dash',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './blog-dash.component.html',
  styleUrls: ['./blog-dash.component.css']
})
export class BlogDashComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute)
  posts: Post[] = []

  constructor(private postService: PostService, private location: Location) {
  }

  ngOnInit() {
    this.getPosts()
    if(this.route.toString().includes('tag/')) {
      this.filterPosts(this.route.snapshot.params['tag'])
    }
    this.location.replaceState('blog')
  }

  getPosts(): void {
    this.posts = this.postService.getAllPosts()
  }

  filterPosts(text: string): void {
    this.posts = this.postService.searchPosts(text)
  }
}
