import { Component, OnInit } from '@angular/core';
import { Vendors } from 'src/app/models/vendors';
import { VendorService } from 'src/app/services/vendor_service';
import { ToastrService } from 'ngx-toastr';
import { MethodsService } from 'src/app/services/methods.service';
import { PaymentMethodModel, ShippingMethodModel } from 'src/app/setings/CompanyInformation/company-info/company-info.component';
import { EmailTempleteSevice } from 'src/app/services/email-templet.service';
import { EmailTemplate } from 'src/app/models/emailtempleat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-modale',
  templateUrl: './vendor-modale.component.html',
  styleUrls: ['./vendor-modale.component.scss'],
  providers: [VendorService, MethodsService,EmailTempleteSevice]
})
export class VendorModaleComponent implements OnInit {

  submitted = false;
  AddVendorForm:FormGroup;
  paymentmethodmodel: PaymentMethodModel
  shippingmethodmodel: ShippingMethodModel
  emailTemplate:EmailTemplate;
  public VendorModal: Vendors;


  constructor( private toastr: ToastrService, private _vendorService: VendorService, private _methodservice: MethodsService,private _emailTempleteSevice :EmailTempleteSevice,private formBuilder: FormBuilder,) { }
  ngOnInit(): void {

    this.AddVendorForm=this.formBuilder.group({
      vendorCode: ['', Validators.required],vendorName: ['', Validators.required],leadTime: ['', Validators.required], emailTemplateId: ['', Validators.required],website: ['', Validators.required],
      paymentMethodName: ['', Validators.required],shippingMethodId: ['', Validators.required], shippingAddress1: ['', Validators.required],shippingAddress2: ['', Validators.required],
      shippingCity: ['', Validators.required],shippingState: ['', Validators.required], shippingCountry: ['', Validators.required],shippingZip: ['', Validators.required],
      contactFirstName: ['', Validators.required],contactLastName: ['', Validators.required], emailAddress: ['', Validators.required],praimaryPhoneNumber: ['', Validators.required],
    
    });
    
    this.setShippingMethodOptions();
    this.setPaymentMethodOptions();
    this.setEmailtemplets();
    this.VendorModal = new Vendors(null, null, null, 0, null,null, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null, null, 0);
    this.VendorModal.accountId = JSON.parse(localStorage.getItem('accountid'));
  }

  get f() { return this.AddVendorForm.controls; }

  setShippingMethodOptions() {
    this._methodservice.getShippingMethods(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response => {
      this.shippingmethodmodel = Response})
    setTimeout(() => { this.shippingmethodmodel }, 5000)
  //  document.getElementById('Pname').
  }

  setPaymentMethodOptions() {
    this._methodservice.getAllPaymentMethods(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response => {
      this.paymentmethodmodel = Response})
    setTimeout(() => { this.paymentmethodmodel }, 5000)
  }

  
  setEmailtemplets() {
    this._emailTempleteSevice.getAllEmailTepmlete(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response => {
      this.emailTemplate = Response})
    setTimeout(() => { this.emailTemplate }, 5000)
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddVendorForm.invalid) {
        return;
    }

    console.log("data", this.VendorModal)
    this._vendorService.postVendor(this.VendorModal).subscribe(Response=>{
      console.log( Response)
      // this.toastr.success('Hello there', 'registration succsed',{timeOut:2000});;
    })
    
    
  }


}