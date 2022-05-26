import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AssessmentComponent } from './assessment.component';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { PostModule } from './components/post/post.module';
import { PostListModule } from './components/post-list/post-list.module';
import { PostSearchModule } from './components/post-search/post-search.module';
import { WritePostModule } from './components/write-post/write-post.module';
import { PostEffects } from './store/effects/post.effects';
import { reducer } from './store/reducers/post.reducers';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    WritePostModule,
    PostSearchModule,
    PostListModule,
    PostModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostEffects]),
    PostListModule,
    PostSearchModule,
  ],
})
export class AssessmentModule {}
