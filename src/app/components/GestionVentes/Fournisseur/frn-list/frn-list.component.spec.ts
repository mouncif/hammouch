import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrnListComponent } from './frn-list.component';

describe('FrnListComponent', () => {
  let component: FrnListComponent;
  let fixture: ComponentFixture<FrnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
