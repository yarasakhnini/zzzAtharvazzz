import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreataccountComponent } from './creataccount.component';

describe('CreataccountComponent', () => {
  let component: CreataccountComponent;
  let fixture: ComponentFixture<CreataccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreataccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreataccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
