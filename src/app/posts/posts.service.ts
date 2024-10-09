import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import Post from './PostsModel';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        map((data) =>
          data.map(
            (post) => new Post(post.userId, post.id, post.title, post.body)
          )
        )
      );
  }
}
