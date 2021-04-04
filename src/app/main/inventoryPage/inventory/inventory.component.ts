import { ProductList } from './../../../models/productlist';

import { Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { RowRecordComponent } from '../row-record/row-record.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ProductService } from 'src/app/services/product_services';
import { ELEMENT_DATA, PeriodicElement } from 'src/app/setings/api-key/api-key.component';
import { AddModaleComponent } from '../add-modale/add-modale.component';
import { ProductFillter } from 'src/app/models/p-filtter';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { VendorService } from 'src/app/services/vendor_service';
export interface Vendorinfo{
  id: number,
  vendorName: string
} 
export interface ProductModale {
    vendor: Vendorinfo,
    id: number,
    sku: string,
    productName: string,
    unitCost: number,
    upcNumber:number,
    avalibaleQuantity:number
}
type AOA = any[]

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  providers:[ProductService,VendorService]
})
export class InventoryComponent implements OnInit {
  [x: string]: any;

  public productModel:ProductModale
  public productUploadlist:ProductList
  public productfillter:ProductFillter
  displayedColumns: string[] = ['chked','SKU', 'UPC/EAN', 'Product_Name', 'Unit_Cost', 'Vname','Quantity','actions'];
  selection = new SelectionModel<ProductModale>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private dialog : MatDialog ,private _productServices :ProductService ,private _vendorService: VendorService,){}
  ngOnInit(): void {
    this.setVendorLest()

    this.productUploadlist=new ProductList(0,null)
    this._productServices.getAllProduct(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
    this.dataSource= new MatTableDataSource<ProductList>(Response);
      this.dataSource.paginator = this.paginator;

  })  
    this.productfillter=new ProductFillter(0,0,false,false,false,false,false,false,false,false,false,false)
    this.productfillter.accountId=JSON.parse(localStorage.getItem('accountid'));
    this.productModel=this.dataSource;

  }

  setVendorLest(){
    this._vendorService.getVendorsname(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
      // console.log(Response)
     this. Vendor=Response
    })
    setTimeout(() => { this.Vendor }, 5000)
  
    }

  
FiltterValues()
{
  console.log('filltrvalues',this.productfillter)
  this._productServices.ProductFillter(this.productfillter).subscribe(Response=>{console.log('fiiilterrr',Response)
 this.dataSource=Response})
}

  selectedrow(productModel:ProductModale){
    this.dialog.open(  RowRecordComponent , { height: '480px',width:  '900px',data:productModel.id}).afterClosed().subscribe(()=>this.ngOnInit());

  }

  updateProduct(productModel:ProductModale)
  {
    this.dialog.open(  UpdateProductComponent , {  height: '480px',width: '900px',data:productModel.id}).afterClosed().subscribe(Response=>
      {console.log(Response) });

  }
  data: AOA = [["vendorName",	"mpn",	"asin",	"sku",	"upcNumber",	"fnsku",	"binNumber",	"status",	"isFBA",	"isFBADirect",	"productName",	"unitCost",	"productLeadTime",	"avalibaleQuantity",	"caseHeight",	"caseWeight",	"caseWidth",	"caseUnitQuantity",	"itemHeight",	"itemWidth",	"itemLength",	"itemWeight",	"overSizeItem",	"unitHeight",	"unitWeight",	"unitLength",	"unitWidth",	"costPerUnit",	"miamiWarehouseBin"]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'Product-Templete.xlsx';

  ExcelTemplete():void{
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    }

 
onFileChange(evt: any) {
  
  /* wire up file reader */
  const target: DataTransfer = <DataTransfer>(evt.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    /* read workbook */
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    
    this.ExcelRows=XLSX.utils.sheet_to_json(ws);
    console.log(this.ExcelRows);

    this.productUploadlist= new ProductList(JSON.parse(localStorage.getItem('accountid')),this.ExcelRows)
    console.log('productploadlist',this.productploadlist);

    console.log(this.productUploadlist)
     this._productServices.UploadProduct(this.productUploadlist).subscribe(Response=>
      {console.log('hii',Response)
      this.ngOnInit() ; }

      )
  };
  reader.readAsBinaryString(target.files[0]);

}


  ExcelRows:any;


  ////////////////////////////////////popup modale////////////////////////////
  onCreat():void{

    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false;
    dialogConfig.autoFocus=true;
    this.dialog.open(  AddModaleComponent , {
      height: '480px',
      width: '900px'
    
    }).
    afterClosed().subscribe(Response=>
      {console.log(Response)
        this.ngOnInit() ; 
      })
  }

globelrow:any;


//////////////////////////////////////////////////
    sidebarOpen=false;

togglesidbar(){
  this.sidebarOpen=!this.sidebarOpen;
}


applayFilter(filtervalue:string){
  
  this.dataSource.filter=filtervalue.trim().toLocaleLowerCase();
}

applayVendorFilter(filtervalue:string){
  
  this.dataSource.data.vendorName.filter=filtervalue.trim().toLocaleLowerCase();
}

checkValue(filtervalue:string){
  this.dataSource.filter=filtervalue;
}


/////////////////////////////////deleteRow///////////////////
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.length;
  return numSelected === numRows;
}

masterToggle() {
  this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
}


selsectedDeletedRows:number[]
RemoveSelection() {
this.selsectedDeletedRows=[];
  this.selection.selected.forEach(s => {
    this.selsectedDeletedRows.push(s.id)
  })
  console.log('selsectedDeletedRows',this.selsectedDeletedRows) 
  console.log('acc id',JSON.parse(localStorage.getItem('accountid'))) 

this._productServices.DeleteProducts(JSON.parse(localStorage.getItem('accountid')),this.selsectedDeletedRows).subscribe(Response=>
  {console.log(Response)
    this.ngOnInit() ; 
  })
}

}

