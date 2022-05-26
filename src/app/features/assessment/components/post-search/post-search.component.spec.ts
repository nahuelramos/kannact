import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents, MockDirectives, MockModule } from 'ng-mocks';

import * as PostActions from '../../store/actions/post.actions';
import { PostSearchComponent } from './post-search.component';

describe('PostSearchComponent', () => {
  let component: PostSearchComponent;
  let fixture: ComponentFixture<PostSearchComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PostSearchComponent,
        MockComponents(MatButton, MatDivider, MatFormField, MatIcon),
        MockDirectives(MatInput, MatLabel),
      ],
      providers: [
        provideMockStore({
          initialState: {
            posts: [],
          },
        }),
      ],
      imports: [MockModule(FormsModule)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSearchComponent);
    store = TestBed.inject(Store);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should dispatch filter posts when user clicks search button', () => {
    component.searchText = 'test';
    fixture.detectChanges();
    const spyDispatch = jest.spyOn(store, 'dispatch');

    const button = fixture.debugElement.query(By.css('#post-button-search'));

    button.nativeElement.click();

    expect(spyDispatch).toHaveBeenCalledWith(PostActions.filterPosts({ searchText: 'test' }));
  });
});
