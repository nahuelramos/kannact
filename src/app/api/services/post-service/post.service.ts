import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostModel } from '../../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private mockPosts = [
    { text: 'fromApi1', date: new Date() },
    { text: 'fromApi2', date: new Date() },
  ];

  retrievePosts(): Observable<PostModel[]> {
    return of([...this.mockPosts]);
  }

  savePost(post: PostModel): Observable<PostModel[]> {
    this.mockPosts.push(Object.assign({}, post));

    return of([...this.mockPosts]);
  }

  filterPosts(searchText: string): Observable<PostModel[]> {
    return of(this.mockPosts.filter((post) => post.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
  }
}
