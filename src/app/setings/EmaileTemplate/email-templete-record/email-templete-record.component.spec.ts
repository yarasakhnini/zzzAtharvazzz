import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTempleteRecordComponent } from './email-templete-record.component';

describe('EmailTempleteRecordComponent', () => {
  let component: EmailTempleteRecordComponent;
  let fixture: ComponentFixture<EmailTempleteRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailTempleteRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTempleteRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
