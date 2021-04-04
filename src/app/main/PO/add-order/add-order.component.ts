import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InteractionService } from 'src/app/interaction.service';
import { ProductService } from 'src/app/services/product_services';
import { ProductModale } from '../../inventoryPage/inventory/inventory.component';

export interface PoModale {
  vendorName:string
  sku: string,///
  productName: string,//
  unitCost: number,
  productLeadTime: number,//
  upcNumber:number,///
  binNumber:number,//
}
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
  providers:[ProductService]
})
export class AddOrderComponent implements OnInit {

  
  public productModel:PoModale
    constructor( private interactionService :InteractionService,private _productServices :ProductService ) { }

  ngOnInit(): void {
    this._productServices.getAllProductByVendorId(JSON.parse(localStorage.getItem('VendorId'))).subscribe(Response=>{
      this.productModel=Response;
  })
}
  
  ngAfterViewInit() {
 //   this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['chked','sku#', 'productName', 'poDate','unitCost','qunitity','totalCost','button'];
  
//public dataSource = new MatTableDataSource<ProductModale>(ELEMENT_DATA);
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatTable,{static:true}) table: MatTable<any>;

selectedAddrow(row :any)
{
 
 this.interactionService.getdata(row);

 this.interactionService.saveclicked=true;
 }

 applayFilter(filtervalue:string){
 // this.dataSource.filter=filtervalue.trim().toLowerCase();
}

checkValue(filtervalue:string){
//  this.dataSource.filter=filtervalue;
}

}