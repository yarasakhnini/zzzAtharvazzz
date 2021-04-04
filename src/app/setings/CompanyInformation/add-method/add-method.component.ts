import { ShippingMethod } from './../../../models/shipping-method';
import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/models/payment-method';
import { MethodsService } from 'src/app/services/methods.service';
import { ToastrService } from 'ngx-toastr';
import { combineAll } from 'rxjs/operators';


@Component({
  selector: 'app-add-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-method.component.scss'],
  providers:[MethodsService]
})

export class AddPaymentMethodComponent implements OnInit {

  public paymentmethod:PaymentMethod;
  constructor(private _methodservices :MethodsService) { }

  ngOnInit(): void {
    this.paymentmethod=new PaymentMethod(0,null);
    this.paymentmethod.accountId=JSON.parse(localStorage.getItem('accountid'));
    console.log('payment method',this.paymentmethod)
  }

  submitted = false;
  createPaymentMMethod()
  {
   // this.Shippingmethod.accountId=JSON.parse(localStorage.getItem('account'))['id'];  
    console.log('payment method',this.paymentmethod)
    this._methodservices.createPaymentMethode(this.paymentmethod).subscribe((data) => {this.success(data)}, // Reach here if res.status >= 200 && <= 299
    (err) =>{this.error()})
  }

  success(data){
    console.log("user created" +  data);
  }
  error(){
    console.log("not authorized");
  }


}


@Component({
  selector: 'app-add-method',
  templateUrl: './add-shipping-method.component.html',
  styleUrls: ['./add-method.component.scss'],
  providers:[MethodsService]
})

export class AddShipingMethodComponent implements OnInit {

  public Shippingmethod:ShippingMethod;
  constructor(private _methodservices :MethodsService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Shippingmethod=new ShippingMethod(0,null);
    this.Shippingmethod.accountId=JSON.parse(localStorage.getItem('accountid'));
  }

  submitted = false;
  createShippingMMethod()
  {
    console.log('shipping method',this.Shippingmethod)
    this._methodservices.createShppingMethod(this.Shippingmethod).subscribe((data) => {this.success(data)}, // Reach here if res.status >= 200 && <= 299
    (err) =>{this.error()})

  }

  success(data){
    console.log("user created" +  data);
    this.toastr.success('shipping method creation successful')
    this._methodservices.getShippingMethods(JSON.parse(localStorage.getItem('accountid')))

  }
  error(){
    console.log("not authorized");
    this.toastr.error('shipping method creation Faild')
  }

}


