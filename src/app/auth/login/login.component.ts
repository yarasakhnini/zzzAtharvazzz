import { data } from 'jquery';
import { Account } from '../../models/account';
import { Component, OnInit, NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login_service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  checked = true;
  public loginModel: Login;
  isLoading = false;
  public accountModel: Account;

  public accountId:number
  constructor(private router: Router, private _loginSerivce: LoginService, private toastr: ToastrService,) { }

  ngOnInit() {
   this.loginModel = new Login(null, null);

  }
  public onSubmit() {
    this.isLoading=true;
    console.log('login', this.loginModel)
      this._loginSerivce.authenticateRequest(this.loginModel).subscribe(Response=>{
       this.saveAccountId(Response.accountId)
       this.isLoading=false;
      },
      (err)=>{this.wrongLogin}
      )

     }
  
  

  public saveAccountId(accountId:number)
  {

    localStorage.setItem('accountid',JSON.stringify(accountId))
    console.log(JSON.parse(localStorage.getItem('accountid')))
    this.router.navigateByUrl('/Users');

  }

  public wrongLogin()
  {
    this.router.navigateByUrl('/WrongLogin');

  }
}

@Component({
  selector: 'app-wrongLogin',
  templateUrl: './wrong-login.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})

export class WrongLoginComponent implements OnInit {

  checked = true;
  public loginModel: Login;
  isLoading = false;
  public accountModel: Account;

  public accountId:number
  constructor(private router: Router, private _loginSerivce: LoginService, private toastr: ToastrService) { }

  ngOnInit() {
   this.loginModel = new Login(null, null);

  }
  public onSubmit() {
    console.log('login', this.loginModel)
    if (this.loginModel.emailAddress != null || this.loginModel.password != null) {
      this._loginSerivce.authenticateRequest(this.loginModel).subscribe(Response=>
       //this._loginSerivce.accountId=  Response.accountId,
       this.saveAccountId(Response.accountId)
       );
                
     }
  }

  public saveAccountId(accountId:number)
  {

    localStorage.setItem('accountid',JSON.stringify(accountId))
    console.log(JSON.parse(localStorage.getItem('accountid')))
    this.router.navigateByUrl('/Users');
  }

}