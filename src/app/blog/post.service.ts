import { Injectable } from '@angular/core';

import {Post} from "./post";
import Posts from "./posts"

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = Posts

  constructor() {
  }

  getPostByID(id: number) {
    return this.posts.find(post => post.id === id)
  }

  getAllPosts() {
    return this.posts
  }
}
