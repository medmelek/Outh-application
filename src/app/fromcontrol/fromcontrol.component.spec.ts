import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromcontrolComponent } from './fromcontrol.component';

describe('FromcontrolComponent', () => {
  let component: FromcontrolComponent;
  let fixture: ComponentFixture<FromcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
