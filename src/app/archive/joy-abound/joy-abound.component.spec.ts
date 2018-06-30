import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyAboundComponent } from './joy-abound.component';

describe('JoyAboundComponent', () => {
  let component: JoyAboundComponent;
  let fixture: ComponentFixture<JoyAboundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoyAboundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoyAboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
