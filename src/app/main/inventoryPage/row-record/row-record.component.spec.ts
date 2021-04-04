import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowRecordComponent } from './row-record.component';

describe('RowRecordComponent', () => {
  let component: RowRecordComponent;
  let fixture: ComponentFixture<RowRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
