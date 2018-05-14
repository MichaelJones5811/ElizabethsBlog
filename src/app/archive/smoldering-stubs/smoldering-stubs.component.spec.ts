import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmolderingStubsComponent } from './smoldering-stubs.component';

describe('SmolderingStubsComponent', () => {
  let component: SmolderingStubsComponent;
  let fixture: ComponentFixture<SmolderingStubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmolderingStubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmolderingStubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
