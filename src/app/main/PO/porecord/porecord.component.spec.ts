import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POrecordComponent } from './porecord.component';

describe('POrecordComponent', () => {
  let component: POrecordComponent;
  let fixture: ComponentFixture<POrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
