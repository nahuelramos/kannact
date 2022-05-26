import { createAction, props } from '@ngrx/store';

import { PostModel } from '@/api/models/post.model';

export const getPosts = createAction('[Get Posts]');
export const getPostsSuccess = createAction('[Get Posts Success]', props<{ posts: PostModel[] }>());

export const savePost = createAction('[Save Post]', props<{ post: PostModel }>());
export const savePostSuccess = createAction('[Save Post Success]', props<{ posts: PostModel[] }>());

export const filterPosts = createAction('[Filter Posts]', props<{ searchText: string }>());
export const filterPostsSuccess = createAction('[Filter Posts Success]', props<{ posts: PostModel[] }>());
