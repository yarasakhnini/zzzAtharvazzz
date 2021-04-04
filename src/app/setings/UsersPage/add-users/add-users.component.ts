import { data } from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from 'src/app/auth/creataccount/password-strength-validator';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
  providers:[UserService]
})
export class AddUsersComponent implements OnInit {

  UserForm: FormGroup;
  submitted = false;
  public usersModal :Users
  constructor(private _userService :UserService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({firstname: ['', Validators.required],lastName: ['', Validators.required],role: ['', Validators.required],
    phoneNumber: ['', Validators.required], emailAddress: ['', [Validators.required , Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8),PasswordStrengthValidator]], });
    
    this.usersModal=new Users(0,null,null,null,null,null,null);
    this.usersModal.accountId=JSON.parse(localStorage.getItem('accountid'));
  }

  get f() { return this.UserForm.controls; }

  createUser() {
    this.submitted = true;
    if (this.UserForm.invalid) {
      return;
  }
    console.log("data", this.usersModal)
    console.log('payment method',this.usersModal)
    this._userService.CreateUser(this.usersModal).subscribe((data)=>{this.success(data)},
    (err) =>{this.error()})
  }

  success(data){
    console.log("user created" );
  }
  error(){
    console.log("not authorized");
  }


}