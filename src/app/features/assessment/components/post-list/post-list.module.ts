import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostModule } from '../post/post.module';
import { PostListComponent } from './post-list.component';

@NgModule({
  declarations: [PostListComponent],
  imports: [CommonModule, PostModule],
  exports: [PostListComponent],
})
export class PostListModule {}
