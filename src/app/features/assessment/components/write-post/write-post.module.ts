import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

import { WritePostComponent } from './write-post.component';

@NgModule({
  declarations: [WritePostComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, FormsModule, MatDividerModule],
  exports: [WritePostComponent],
})
export class WritePostModule {}
