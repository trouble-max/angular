import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    posts: Post[] = [];

    constructor(
        private postService: PostsService
    ) { }

    ngOnInit(): void {
        this.getPosts()
    }

    getPosts() {
        this.posts = this.postService.getPosts();
    }

    like(id: number) {
        this.posts[id-1].liked = !this.posts[id-1].liked
    }
}
