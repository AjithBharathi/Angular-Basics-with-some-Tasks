import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOnOffComponent } from './server-on-off.component';

describe('ServerOnOffComponent', () => {
  let component: ServerOnOffComponent;
  let fixture: ComponentFixture<ServerOnOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerOnOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerOnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
