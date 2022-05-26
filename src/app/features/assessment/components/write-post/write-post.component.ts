import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PostActions from '../../store/actions/post.actions';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss'],
})
export class WritePostComponent {
  postText: string;

  constructor(private store: Store) {}

  sendPost(): void {
    if (this.postText.trim()) {
      this.store.dispatch(PostActions.savePost({ post: { text: this.postText, date: new Date() } }));
      this.postText = '';
    }
  }
}
