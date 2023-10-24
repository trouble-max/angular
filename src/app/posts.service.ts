import { Injectable } from '@angular/core';
import { Post, posts } from './models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }


  getPosts(): Post[] {
    return posts
  }
}
