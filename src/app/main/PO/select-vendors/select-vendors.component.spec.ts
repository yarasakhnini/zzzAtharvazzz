import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVendorsComponent } from './select-vendors.component';

describe('SelectVendorsComponent', () => {
  let component: SelectVendorsComponent;
  let fixture: ComponentFixture<SelectVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
