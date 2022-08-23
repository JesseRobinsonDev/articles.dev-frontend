import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagObjectComponent } from './tag-object.component';

describe('TagObjectComponent', () => {
  let component: TagObjectComponent;
  let fixture: ComponentFixture<TagObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
