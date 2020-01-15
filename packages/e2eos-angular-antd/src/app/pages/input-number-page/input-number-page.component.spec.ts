import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberPageComponent } from './input-number-page.component';

describe('InputNumberPageComponent', () => {
  let component: InputNumberPageComponent;
  let fixture: ComponentFixture<InputNumberPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
