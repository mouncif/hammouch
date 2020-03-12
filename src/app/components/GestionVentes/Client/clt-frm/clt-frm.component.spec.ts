import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CltFrmComponent } from './clt-frm.component';

describe('CltFrmComponent', () => {
  let component: CltFrmComponent;
  let fixture: ComponentFixture<CltFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CltFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CltFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
