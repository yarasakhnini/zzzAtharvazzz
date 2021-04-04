import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/app/models/emailtempleat';
import { EmailTempleteSevice } from 'src/app/services/email-templet.service';

@Component({
  selector: 'app-email-templete-record',
  templateUrl: './email-templete-record.component.html',
  styleUrls: ['./email-templete-record.component.scss'],
  providers:[EmailTempleteSevice]

})
export class EmailTempleteRecordComponent implements OnInit {


  public emailTemplate:EmailTemplate;
  constructor(private _emailservice :EmailTempleteSevice,@Inject(MAT_DIALOG_DATA) public id:number) { }


  ngOnInit(): void {
    this._emailservice.getEmailTepmlete(this.id).subscribe(Response=>
      {
        console.log(Response)
        this.emailTemplate=Response
      }
    )

  }

  EditEmailTemplate()
  {
console.log('ass',this.emailTemplate)
    this._emailservice.updateEmailTepmlete(this.emailTemplate).subscribe(Response=>
      {
        console.log(Response)
        window.location.reload();
    
      }
      )
      }
  }

