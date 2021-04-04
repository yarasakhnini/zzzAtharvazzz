import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowrecordComponent } from './rowrecord.component';

describe('RowrecordComponent', () => {
  let component: RowrecordComponent;
  let fixture: ComponentFixture<RowrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
