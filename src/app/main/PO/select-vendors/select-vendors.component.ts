import { jsPDF } from 'jspdf';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/services/VendorName.service';
import { VendorService } from 'src/app/services/vendor_service';
import { PurchaseOrder } from 'src/app/services/purchase-order.service';
import { PurchaseOrderViewModel } from 'src/app/models/newPurchaseOrder';

@Component({
  selector: 'app-select-vendors',
  templateUrl: './select-vendors.component.html',
  styleUrls: ['./select-vendors.component.scss'],
  providers:[VendorService,PurchaseOrder]
})
export class SelectVendorsComponent implements OnInit {
  public purchaseOrderViewModel:PurchaseOrderViewModel
  Vendor:Vendor
  vendorId :number
  constructor(public _vendorService: VendorService,private router: Router,private _PurchaseOrder:PurchaseOrder) { }

  ngOnInit(): void {
    this.setVendorLest()
    this.purchaseOrderViewModel=new PurchaseOrderViewModel(0,null,null,null,0,null,0,null,null,null,null,null,null,0,0,null,null,null,null,null,0,null,0,0,0,null)
  }

  setVendorLest(){
    this._vendorService.getVendorsname(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
    console.log(Response)
    this.Vendor=Response
 console.log('my',this.Vendor)
    })
    setTimeout(() => { this.Vendor }, 5000)

    }

    onSubmit(vendorId:number){
      localStorage.setItem('VendorId',JSON.stringify(vendorId))
      this.purchaseOrderViewModel.vendorId=vendorId;
      this.purchaseOrderViewModel.accountId=(JSON.parse(localStorage.getItem('accountid')))
      this.purchaseOrderViewModel.leadTime=0
      this._PurchaseOrder.CreatePurchaseOrder(this.purchaseOrderViewModel).subscribe(Response=>
        {
          console.log('Response ID',Response.id )
          this.saveAccountId(Response.id)

          
        })

        // console.log(JSON.parse(localStorage.getItem('PoID')))
        // console.log(JSON.parse(localStorage.getItem('VendorId')))

}

public saveAccountId(purchaseId:number)
{

  localStorage.setItem('purchaseid',JSON.stringify(purchaseId))
  console.log(JSON.parse(localStorage.getItem('purchaseid')))
  this.router.navigateByUrl('/newPurchase');

}

}