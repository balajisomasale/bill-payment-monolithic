import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorItemInfoComponent } from './vendor-item-info.component';

describe('VendorItemInfoComponent', () => {
  let component: VendorItemInfoComponent;
  let fixture: ComponentFixture<VendorItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
