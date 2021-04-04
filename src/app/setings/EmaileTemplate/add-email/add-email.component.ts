import { Component, OnInit } from '@angular/core';
import { EmailTemplate } from 'src/app/models/emailtempleat';
import { EmailTempleteSevice } from 'src/app/services/email-templet.service';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.scss'],
  providers:[EmailTempleteSevice],
})
export class AddEmailComponent implements OnInit {

  public emailTemplate:EmailTemplate;
  constructor(private _emailservice :EmailTempleteSevice) { }


  ngOnInit(): void {
    this.emailTemplate=new EmailTemplate(0,null,null,null);
    this.emailTemplate.accountId=JSON.parse(localStorage.getItem('accountid'));
  }

  createEmailTemplate(){
    console.log('payment method',this.emailTemplate)
this._emailservice.createEmaileTepmlete(this.emailTemplate).subscribe((data)=>{this.success(data)},
(err) =>{this.error()})
  }
success(data){
  console.log("Email created" );
}
error(){
  console.log("not authorized");
}


  }


