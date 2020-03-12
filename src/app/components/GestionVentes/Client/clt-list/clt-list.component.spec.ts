import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltListComponent } from './clt-list.component';

describe('CltListComponent', () => {
  let component: CltListComponent;
  let fixture: ComponentFixture<CltListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CltListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CltListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
