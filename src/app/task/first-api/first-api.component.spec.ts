import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstApiComponent } from './first-api.component';

describe('FirstApiComponent', () => {
  let component: FirstApiComponent;
  let fixture: ComponentFixture<FirstApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
