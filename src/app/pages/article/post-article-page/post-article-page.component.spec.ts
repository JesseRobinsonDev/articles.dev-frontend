import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostArticlePageComponent } from './post-article-page.component';

describe('PostArticlePageComponent', () => {
  let component: PostArticlePageComponent;
  let fixture: ComponentFixture<PostArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostArticlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
