import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPaymentMethodComponent, AddShipingMethodComponent } from './add-method.component';

describe('AddPaymenyMethodComponent', () => {
  let component: AddPaymentMethodComponent;
  let fixture: ComponentFixture<AddPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('AddShipingMethodComponent', () => {
  let component: AddShipingMethodComponent;
  let fixture: ComponentFixture<AddShipingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShipingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShipingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
