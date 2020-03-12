import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrnFormComponent } from './frn-form.component';

describe('FrnFormComponent', () => {
  let component: FrnFormComponent;
  let fixture: ComponentFixture<FrnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
