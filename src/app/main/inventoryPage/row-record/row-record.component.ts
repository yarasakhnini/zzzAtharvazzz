import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product_services';

export interface ProductRow
{
    id: number,
     vendorId : number,
     mpn : number,
     asin :  string ,
     sku :  string ,
     upcNumber : number,
     fnsku :  number ,
     binNumber : number,
     status : number,
     isFBA : boolean,
     isFBADirect : boolean,
     productName :  string ,
     unitCost : number,
     productLeadTime : number,
     avalibaleQuantity : number,
     caseHeight : number,
     caseWeight : number,
     caseLength : number,
     caseWidth : number,
     caseUnitQuantity : number,
     itemHeight : number,
     itemWidth : number,
     itemLength : number,
     itemWeight : number,
     overSizeItem : boolean,
     unitHeight : number,
     unitWeight : number,
     unitLength : number,
     unitWidth : number,
     costPerUnit : number,
     miamiWarehouseBin :  string 
  
}
@Component({
  selector: 'app-row-record',
  templateUrl: './row-record.component.html',
  styleUrls: ['./row-record.component.scss'],
  providers:[ProductService]
})
export class RowRecordComponent implements OnInit {

public productRow : ProductRow;
  constructor(private _productServices :ProductService,@Inject(MAT_DIALOG_DATA) public id:number){}
  ngOnInit(): void {
    this._productServices.getProduct(this.id).subscribe(Response=>
      this.productRow=Response
      )
  }


}
