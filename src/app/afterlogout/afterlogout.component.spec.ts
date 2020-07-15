import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterlogoutComponent } from './afterlogout.component';

describe('AfterlogoutComponent', () => {
  let component: AfterlogoutComponent;
  let fixture: ComponentFixture<AfterlogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterlogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
