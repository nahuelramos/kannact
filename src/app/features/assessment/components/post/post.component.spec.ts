import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { MockComponents } from 'ng-mocks';

import { PostComponent } from './post.component';

@Pipe({ name: 'date' })
class MockPipe implements PipeTransform {
  transform(value: Date): string {
    return value.toDateString();
  }
}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent, MockComponents(MatCard), MockPipe],
    }).compileComponents();
  });

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('12-01-2020'));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data and text from post', () => {
    component.post = { text: 'testText', date: new Date() };

    fixture.detectChanges();

    const date = fixture.debugElement.query(By.css('#post-date'));
    const text = fixture.debugElement.query(By.css('#post-text'));

    expect(text.nativeElement.textContent).toEqual('testText');
    expect(date.nativeElement.textContent).toEqual(new Date().toDateString());
  });
});
