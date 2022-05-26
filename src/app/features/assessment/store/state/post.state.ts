import { PostModel } from '@/api/models/post.model';

export interface PostState {
  posts: PostModel[];
  filteredPosts: PostModel[];
}

export const initialState: PostState = {
  posts: [],
  filteredPosts: [],
};
