import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverComponent } from './forever.component';

describe('ForeverComponent', () => {
  let component: ForeverComponent;
  let fixture: ComponentFixture<ForeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
