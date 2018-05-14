import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiltComponent } from './guilt.component';

describe('GuiltComponent', () => {
  let component: GuiltComponent;
  let fixture: ComponentFixture<GuiltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
