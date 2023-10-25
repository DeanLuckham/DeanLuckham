import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-blog-dash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-dash.component.html',
  styleUrls: ['./blog-dash.component.css']
})
export class BlogDashComponent implements OnInit {
  posts: Post[] = []
  filteredPosts: Post[] = []

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(): void {
    this.posts = this.postService.getAllPosts()
    this.filteredPosts = this.posts
  }

  filterPosts(text: string): void {
    if (!text) {
      this.filteredPosts = this.posts
    }

    this.filteredPosts = this.posts.filter(
      post => post.title.toLowerCase().includes(text.toLowerCase())
    )
  }
}
