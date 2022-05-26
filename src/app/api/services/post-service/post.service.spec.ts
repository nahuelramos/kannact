import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PostService } from './post.service';

describe('PublicHolidayService', () => {
  let service: PostService;

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 3, 1));
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve 2 posts from api', fakeAsync(() => {
    service.retrievePosts().subscribe((posts) => {
      expect(posts).toHaveLength(2);
    });

    tick();
  }));

  it('should save post in api', fakeAsync(() => {
    service.savePost({ text: 'test', date: new Date() }).subscribe((posts) => {
      expect(posts).toHaveLength(3);
    });

    tick();
  }));
});
