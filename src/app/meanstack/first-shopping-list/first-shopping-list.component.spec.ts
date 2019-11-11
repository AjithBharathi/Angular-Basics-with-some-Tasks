import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstShoppingListComponent } from './first-shopping-list.component';

describe('FirstShoppingListComponent', () => {
  let component: FirstShoppingListComponent;
  let fixture: ComponentFixture<FirstShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
