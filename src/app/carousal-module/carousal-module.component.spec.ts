import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalModuleComponent } from './carousal-module.component';

describe('CarousalModuleComponent', () => {
  let component: CarousalModuleComponent;
  let fixture: ComponentFixture<CarousalModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
