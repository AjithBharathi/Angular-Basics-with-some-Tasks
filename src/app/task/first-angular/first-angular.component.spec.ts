import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAngularComponent } from './first-angular.component';

describe('FirstAngularComponent', () => {
  let component: FirstAngularComponent;
  let fixture: ComponentFixture<FirstAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
