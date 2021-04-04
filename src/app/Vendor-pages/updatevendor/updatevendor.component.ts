import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailTemplate } from 'src/app/models/emailtempleat';
import { EmailTempleteSevice } from 'src/app/services/email-templet.service';
import { MethodsService } from 'src/app/services/methods.service';
import { VendorService } from 'src/app/services/vendor_service';
import { PaymentMethodModel, ShippingMethodModel } from 'src/app/setings/CompanyInformation/company-info/company-info.component';
import { VendoModel } from '../rowrecord/rowrecord.component';


@Component({
  selector: 'app-updatevendor',
  templateUrl: './updatevendor.component.html',
  styleUrls: ['./updatevendor.component.scss'],
  providers:[VendorService,MethodsService,EmailTempleteSevice]

})
export class UpdatevendorComponent implements OnInit {

  public paymentmethodmodel: PaymentMethodModel
  public shippingmethodmodel: ShippingMethodModel
  public emailTemplate:EmailTemplate;
   public VendorModal:VendoModel

  constructor(private  _vendortService: VendorService ,@Inject(MAT_DIALOG_DATA) public id:number,private _methodservice: MethodsService,private _emailTempleteSevice :EmailTempleteSevice){}

  ngOnInit(): void {
    this.setShippingMethodOptions();
    this.setPaymentMethodOptions();
    this.setEmailtemplets();
    
    this._vendortService.getVendor(this.id).subscribe(Response=>
    this.VendorModal=Response)


  }

  
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

  onSubmit(){
console.log('newdata',this.VendorModal)
this._vendortService.updateVendor(this.VendorModal).subscribe(Response=>
  {
    console.log(Response)
    window.location.reload();

  }
  )
  }
  
}

