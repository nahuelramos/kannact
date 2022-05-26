import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of, Subject } from 'rxjs';

import { PostService } from '@/api/services/post-service/post.service';

import * as PostActions from '../actions/post.actions';
import { PostEffects } from './post.effects';

describe('PublicHolidayEffects', () => {
  let service: PostService;
  let actions$: Subject<Action>;
  let effects: PostEffects;
  const postsMock = [
    { text: 'fromApi1', date: new Date() },
    { text: 'fromApi2', date: new Date() },
  ];
  const postService: Partial<PostService> = {
    retrievePosts: jest.fn().mockReturnValue(of(postsMock)),
    filterPosts: jest.fn().mockReturnValue(of(postsMock)),
    savePost: jest.fn().mockReturnValue(of(postsMock)),
  };

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 3, 1));
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({}),
        provideMockActions(() => actions$),
        {
          provide: PostService,
          useValue: postService,
        },
      ],
    });
    service = TestBed.inject(PostService);
    effects = TestBed.inject<PostEffects>(PostEffects);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load posts in the store', fakeAsync(() => {
    actions$ = new Subject();

    effects.loadPosts$.subscribe({
      next: (action) => {
        expect(action).toEqual({
          type: PostActions.getPostsSuccess.type,
          posts: postsMock,
        });
      },
    });
    actions$.next(PostActions.getPosts);
    tick();
  }));

  it('should not load posts in the store when api fails', fakeAsync(() => {
    actions$ = new Subject();

    effects.loadPosts$.subscribe({
      error: (error) => expect(error).toStrictEqual({}),
    });
    actions$.error({});
    tick();
  }));

  it('should filter posts', fakeAsync(() => {
    actions$ = new Subject();

    effects.filterPosts$.subscribe({
      next: (action) => {
        expect(action).toEqual({
          type: PostActions.filterPostsSuccess.type,
          posts: postsMock,
        });
      },
    });
    actions$.next(PostActions.filterPosts({ searchText: 'test' }));
    tick();
  }));

  it('should not refresh store when api fails to filter posts', fakeAsync(() => {
    actions$ = new Subject();

    effects.filterPosts$.subscribe({
      error: (error) => expect(error).toStrictEqual({}),
    });
    actions$.error({});
    tick();
  }));

  it('should save post', fakeAsync(() => {
    actions$ = new Subject();

    effects.savePost$.subscribe({
      next: (action) => {
        expect(action).toEqual({
          type: PostActions.savePostSuccess.type,
          posts: postsMock,
        });
      },
    });
    actions$.next(PostActions.savePost({ post: postsMock[0] }));
    tick();
  }));

  it('should not save post when api fails', fakeAsync(() => {
    actions$ = new Subject();

    effects.savePost$.subscribe({
      error: (error) => expect(error).toStrictEqual({}),
    });
    actions$.error({});
    tick();
  }));
});
