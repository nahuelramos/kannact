import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostState } from '../state/post.state';

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectPosts = createSelector(selectPostState, (state: PostState) => state.posts);
