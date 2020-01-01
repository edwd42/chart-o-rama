import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnegyPriorityComponent } from './enegy-priority.component';

describe('EnegyPriorityComponent', () => {
  let component: EnegyPriorityComponent;
  let fixture: ComponentFixture<EnegyPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnegyPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnegyPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
