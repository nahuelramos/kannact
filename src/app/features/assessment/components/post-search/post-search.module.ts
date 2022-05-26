import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { PostSearchComponent } from './post-search.component';

@NgModule({
  declarations: [PostSearchComponent],
  imports: [CommonModule, MatInputModule, FormsModule, MatButtonModule, MatDividerModule, MatIconModule],
  exports: [PostSearchComponent],
})
export class PostSearchModule {}
