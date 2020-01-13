import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsePageComponent } from './collapse-page.component';

describe('CollapsePageComponent', () => {
  let component: CollapsePageComponent;
  let fixture: ComponentFixture<CollapsePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
