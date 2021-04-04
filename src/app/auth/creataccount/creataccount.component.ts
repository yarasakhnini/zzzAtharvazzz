import { FormControl } from '@angular/forms';
import { cssNumber, data } from 'jquery';
import { Account } from '../../models/account';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login_service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpperCasePipe } from '@angular/common';
import { PasswordStrengthValidator } from './password-strength-validator';

@Component({
  selector: 'app-creataccount',
  templateUrl: './creataccount.component.html',
  styleUrls: ['./creataccount.component.scss'],
  providers: [LoginService]
})
export class CreataccountComponent implements OnInit {
  // form: FormGroup;
  registerForm: FormGroup;
  public accountModel: Account;
  submitted = false;
  showSuccessMessage: boolean;
  serverErrorMassage: string;
  error: HttpErrorResponse
  
  constructor(private router: Router, private _accountService: LoginService, private fb: FormBuilder, private toastr: ToastrService,private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({firstname: ['', Validators.required],

 
     lastName: ['', Validators.required],
     phoneNumber: ['', Validators.required],
     emailAddress: ['', [Validators.required , Validators.email]],
     businessName: ['', Validators.required],
     businesswebsite: ['', [Validators.required]],
     addressLine1: ['', Validators.required],
     addressLine2: ['', Validators.required],
    city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8),PasswordStrengthValidator]],
    });

    this.accountModel = new Account(null, null, null, null, null, null, null, null, null, null, null, null, null);
    console.log(this.accountModel);
    }
    get f() { return this.registerForm.controls; }


  createAccount() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this._accountService.createAccount(this.accountModel).subscribe(
  
      (res: Response) => {
        console.log('bravo',res);
        this.toastr.success('Hello there', 'registration succsed',{timeOut:2000});;
             //  alert('registration succsed');;

        console.log('bravo', this.toastr);
        this.router.navigateByUrl('/login')
  
      });
    }


ValidWebsite(website:string){
      if(website.includes(".com"))
      { return true;}else return false; }

  
  }

