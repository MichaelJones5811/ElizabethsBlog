import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectedComponent } from './corrected.component';

describe('CorrectedComponent', () => {
  let component: CorrectedComponent;
  let fixture: ComponentFixture<CorrectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
