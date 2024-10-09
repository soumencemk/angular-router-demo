import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import Post from '../PostsModel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });    
  }

  getRandomArbitrary(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
}
}
