import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';

import { AssessmentComponent } from './assessment.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostSearchComponent } from './components/post-search/post-search.component';
import { WritePostComponent } from './components/write-post/write-post.component';

describe('AssessmentComponent', () => {
  let component: AssessmentComponent;
  let fixture: ComponentFixture<AssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssessmentComponent, MockComponents(WritePostComponent, PostSearchComponent, PostListComponent)],
      providers: [
        provideMockStore({
          initialState: {
            posts: [],
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
