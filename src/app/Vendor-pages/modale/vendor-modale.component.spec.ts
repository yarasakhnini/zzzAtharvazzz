import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorModaleComponent } from './vendor-modale.component';

describe('VendorModaleComponent', () => {
  let component: VendorModaleComponent;
  let fixture: ComponentFixture<VendorModaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorModaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
