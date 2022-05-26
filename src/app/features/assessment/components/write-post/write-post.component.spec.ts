import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents, MockDirectives, MockModule } from 'ng-mocks';

import * as PostActions from '../../store/actions/post.actions';
import { WritePostComponent } from './write-post.component';

describe('WritePostComponent', () => {
  let component: WritePostComponent;
  let fixture: ComponentFixture<WritePostComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WritePostComponent,
        MockComponents(MatFormField, MatDivider, MatFormField),
        MockDirectives(MatLabel),
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

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 3, 1));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritePostComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should save new post by dispatching action save', () => {
    const spyDispatch = jest.spyOn(store, 'dispatch');

    component.postText = 'test';
    fixture.detectChanges();

    component.sendPost();

    expect(spyDispatch).toHaveBeenCalledWith(PostActions.savePost({ post: { date: new Date(), text: 'test' } }));
  });
});
