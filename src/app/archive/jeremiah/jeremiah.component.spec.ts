import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeremiahComponent } from './jeremiah.component';

describe('JeremiahComponent', () => {
  let component: JeremiahComponent;
  let fixture: ComponentFixture<JeremiahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeremiahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeremiahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
