import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillItemDetailsComponent } from './bill-item-details.component';

describe('BillItemDetailsComponent', () => {
  let component: BillItemDetailsComponent;
  let fixture: ComponentFixture<BillItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
