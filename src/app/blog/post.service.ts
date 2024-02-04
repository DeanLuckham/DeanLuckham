import { Injectable } from '@angular/core';

import {Post} from "./post";
import Posts from "./posts"

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = Posts

  constructor() {
    this.sortByDateDesc()
  }

  sortByDateDesc(): void {
    this.posts.sort(
      (a, b) => b.created.getTime() - a.created.getTime()
    )
  }

  getPostByID(id: number): Post | undefined {
    return this.posts.find(post => post.id === id)
  }

  getAllPosts(): Post[] {
    return this.posts
  }

  searchPosts(text: string): Post[] {
    if(!text.trim())
      return this.getAllPosts()

    return this.posts.filter(
      post => post.title.toLowerCase().includes(text.toLowerCase()) ||
        post.tags.find(tag => tag.toLowerCase().includes(text.toLowerCase()))
    )
  }
}
