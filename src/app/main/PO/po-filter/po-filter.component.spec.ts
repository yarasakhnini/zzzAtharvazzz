import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoFilterComponent } from './po-filter.component';

describe('PoFilterComponent', () => {
  let component: PoFilterComponent;
  let fixture: ComponentFixture<PoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
