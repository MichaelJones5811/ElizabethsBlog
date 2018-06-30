import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledEvenMoreComponent } from './filled-even-more.component';

describe('FilledEvenMoreComponent', () => {
  let component: FilledEvenMoreComponent;
  let fixture: ComponentFixture<FilledEvenMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilledEvenMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilledEvenMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
