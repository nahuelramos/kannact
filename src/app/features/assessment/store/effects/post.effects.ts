import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { PostService } from '@/api/services/post-service/post.service';

import * as PostActions from '../actions/post.actions';

@Injectable({
  providedIn: 'root',
})
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPosts.type),
      mergeMap(() =>
        this.postService.retrievePosts().pipe(
          map((posts) => PostActions.getPostsSuccess({ posts })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  savePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.savePost.type),
      mergeMap(({ post }) =>
        this.postService.savePost(post).pipe(
          map((posts) => PostActions.savePostSuccess({ posts })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  filterPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.filterPosts.type),
      mergeMap(({ searchText }) =>
        this.postService.filterPosts(searchText).pipe(
          map((posts) => PostActions.filterPostsSuccess({ posts })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
