import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PostActions from '../../store/actions/post.actions';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss'],
})
export class PostSearchComponent {
  searchText: string;

  constructor(private store: Store) {}

  search(searchText: string): void {
    this.store.dispatch(PostActions.filterPosts({ searchText: searchText }));
  }
}
