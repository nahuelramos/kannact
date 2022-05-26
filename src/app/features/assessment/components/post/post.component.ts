import { Component, Input } from '@angular/core';

import { PostModel } from '@/api/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post: PostModel;
}
