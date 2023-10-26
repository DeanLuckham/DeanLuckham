import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {Post} from "../post";
import {PostService} from "../post.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-blog-dash',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './blog-dash.component.html',
  styleUrls: ['./blog-dash.component.css']
})
export class BlogDashComponent implements OnInit {
  posts: Post[] = []

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(): void {
    this.posts = this.postService.getAllPosts()
  }

  filterPosts(text: string): void {
    this.posts = this.postService.searchPosts(text)
  }
}
