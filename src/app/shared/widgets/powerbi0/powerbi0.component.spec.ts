import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerbi0Component } from './powerbi0.component';

describe('Powerbi0Component', () => {
  let component: Powerbi0Component;
  let fixture: ComponentFixture<Powerbi0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Powerbi0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Powerbi0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
