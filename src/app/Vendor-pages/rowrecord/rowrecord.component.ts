import { data } from 'jquery';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InteractionService } from 'src/app/interaction.service';
import { VendorService } from 'src/app/services/vendor_service';
import { Vendors } from 'src/app/models/vendors';
export interface VendoModel {

    id: number,
    vendorName: string,
    vendorCode:  string ,
     website :  string ,
     leadTime : number,
     status : number,
     paymentMethodId : number,
     shippingMethodId : number,
     emailTemplateId : number,
     shippingAddress1 :  string ,
     shippingAddress2 :  string ,
     shippingCity :  string ,
     shippingState :  string ,
     shippingCountry :  string ,
     shippingZip : number,
     contactFirstName :  string ,
     contactLastName :  string ,
     emailAddress : string ,
     praimaryPhoneNumber :  string ,
     secondryPhoneNumber :  string ,
     faxNumber :  string ,
     billingAddress1 :  string ,
     billingAddress2 :  string ,
     billingCity :  string ,
     billingState :  string ,
     billingCountry :  string 
  }


@Component({
  selector: 'app-rowrecord',
  templateUrl: './rowrecord.component.html',
  styleUrls: ['./rowrecord.component.scss'],
  providers:[VendorService]
})
export class RowrecordComponent implements OnInit {


  public VendorModal: VendoModel;
  constructor(private  _vendortService: VendorService ,@Inject(MAT_DIALOG_DATA) public id:number){}
  ngOnInit(): void {
    console.log("id",this.id)
    this._vendortService.getVendor(this.id).subscribe(Response=>
      this.VendorModal=Response
      )

  }
}

