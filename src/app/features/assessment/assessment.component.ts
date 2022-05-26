import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PostActions from './store/actions/post.actions';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts());
  }
}
