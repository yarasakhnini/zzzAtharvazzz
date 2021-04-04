import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetlinkComponent } from './resetlink.component';

describe('ResetlinkComponent', () => {
  let component: ResetlinkComponent;
  let fixture: ComponentFixture<ResetlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
