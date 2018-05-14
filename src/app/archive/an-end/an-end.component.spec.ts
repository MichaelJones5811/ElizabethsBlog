import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnEndComponent } from './an-end.component';

describe('AnEndComponent', () => {
  let component: AnEndComponent;
  let fixture: ComponentFixture<AnEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
