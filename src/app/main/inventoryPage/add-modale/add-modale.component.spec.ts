import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModaleComponent } from './add-modale.component';

describe('AddModaleComponent', () => {
  let component: AddModaleComponent;
  let fixture: ComponentFixture<AddModaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
