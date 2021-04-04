import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/Inventory';
import { ProductService } from 'src/app/services/product_services';
import { Vendor } from 'src/app/services/VendorName.service';
import { VendorService } from 'src/app/services/vendor_service';
import { ProductRow } from '../row-record/row-record.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
  providers:[ProductService,VendorService]
})
export class UpdateProductComponent implements OnInit {
  public productmodel : Product;
  Vendor:Vendor

  constructor(private _productServices :ProductService,private _vendorService: VendorService,@Inject(MAT_DIALOG_DATA) public id:number){}
  


  ngOnInit(): void {
    this.setVendorLest()

    this._productServices.getProduct(this.id).subscribe(Response=>
     { this.productmodel=Response
    })
  }

  
  setVendorLest(){
    this._vendorService.getVendorsname(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
      // console.log(Response)
     this. Vendor=Response
    })
    setTimeout(() => { this.Vendor }, 5000)

    }
  
  
  onSubmit(){
    console.log('newdata',this.productmodel)
    this._productServices.updateProduct(this.productmodel).subscribe(Response=>
      {     console.log(Response)
         window.location.reload();
      })}
    
}