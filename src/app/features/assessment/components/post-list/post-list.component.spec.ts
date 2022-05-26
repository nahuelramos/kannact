import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import * as Selectors from '../../store/selectors/post.selector';
import { PostComponent } from '../post/post.component';
import { PostListComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent, MockComponent(PostComponent)],
      providers: [
        provideMockStore({
          initialState: {
            posts: [],
          },
          selectors: [
            {
              selector: Selectors.selectPosts,
              value: [],
            },
          ],
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it('should render correclty two posts', () => {
    mockStore.overrideSelector(Selectors.selectPosts, [
      { text: 'text', date: new Date() },
      { text: 'text', date: new Date() },
    ]);

    fixture.detectChanges();
    const postLists = fixture.debugElement.queryAll(By.css('.post-list'));

    expect(component.posts).toHaveLength(2);
    expect(postLists).toHaveLength(2);
  });
});
