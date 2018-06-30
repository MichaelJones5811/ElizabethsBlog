import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AGodICanTrustComponent } from './a-god-i-can-trust.component';

describe('AGodICanTrustComponent', () => {
  let component: AGodICanTrustComponent;
  let fixture: ComponentFixture<AGodICanTrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AGodICanTrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AGodICanTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
