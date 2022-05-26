import { Action, createReducer, on } from '@ngrx/store';

import * as PostActions from '../actions/post.actions';
import { initialState, PostState } from '../state/post.state';

const publicHolidayReducer = createReducer(
  initialState,
  on(PostActions.getPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
  })),
  on(PostActions.savePostSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
  })),
  on(PostActions.getPosts, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PostActions.filterPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
  }))
);

export const reducer = (state: PostState, action: Action): PostState => {
  return publicHolidayReducer(state, action);
};
