import { Component, OnInit } from '@angular/core';
import { AccountInfo } from '../models/accountInfo';
import { UpdateAccountInfo } from '../models/updateaccountInfo';
import { AccountInfoeSevice } from '../services/account-info-service';
export class UpdateAccountPassword {​​​​​​​​
  constructor(
   public password: string,
   public accountId: number,
  ){}}
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
  providers:[AccountInfoeSevice]
})


export class MyAccountComponent implements OnInit {
  public updateAccountInfo:UpdateAccountInfo
  public accountInfo:AccountInfo
  public Cpassword:string
  public NewPass:string
  currentpass:string
  public updateAccountPassword:UpdateAccountPassword
  constructor(private _AccountInfoeSevice:AccountInfoeSevice) { }

  ngOnInit(): void {
    this._AccountInfoeSevice.GetAccountForEdit(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>
      this.updateAccountInfo=Response)
      this._AccountInfoeSevice.GetAccount(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>this.Cpassword= Response.password)
      this.updateAccountPassword=new UpdateAccountPassword (null,0)
    }

  updateInfo()
  {
    console.log(this.updateAccountInfo)
    this._AccountInfoeSevice.updateInfo(this.updateAccountInfo).subscribe(Response=>
      {console.log(Response)})
  }
  iscorrectPassword(currentpassx:string)
  {
  if(currentpassx==this.Cpassword)
  return  true
  else return false
  }

 cnfermPassword(pass:string)
  {
  if(pass==this.NewPass)
  return  false
  else return true
  }

  changePassword(){
    this.updateAccountPassword.accountId=JSON.parse(localStorage.getItem('accountid'))
    this._AccountInfoeSevice.updatePassword(this.updateAccountPassword).subscribe(Response=>
      {
        console.log(Response)
        window.location.reload();
    
      }
      )}
  }
