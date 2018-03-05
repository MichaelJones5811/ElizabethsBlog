import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Article0Component } from './article0.component';

describe('Article0Component', () => {
  let component: Article0Component;
  let fixture: ComponentFixture<Article0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
