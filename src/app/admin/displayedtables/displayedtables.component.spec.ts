import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedtablesComponent } from './displayedtables.component';

describe('DisplayedtablesComponent', () => {
  let component: DisplayedtablesComponent;
  let fixture: ComponentFixture<DisplayedtablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedtablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
