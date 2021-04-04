import { Vendors } from 'src/app/models/vendors';
import {AfterViewInit, Component, ViewChild, OnInit, Inject, EventEmitter, Output} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VendorModaleComponent } from '../modale/vendor-modale.component';
import { RowrecordComponent,  } from '../rowrecord/rowrecord.component';
import * as XLSX from 'xlsx';
import { SelectionModel } from '@angular/cdk/collections';
import { VendorService } from 'src/app/services/vendor_service';
import { PaymentMethod } from 'src/app/models/payment-method';
import { PaymentMethodModel, ShippingMethodModel } from 'src/app/setings/CompanyInformation/company-info/company-info.component';
import { ShippingMethod } from 'src/app/models/shipping-method';
import { anyChanged } from '@progress/kendo-angular-common';
import { UpdatevendorComponent } from '../updatevendor/updatevendor.component';
import { VendorList } from 'src/app/models/vendorList';
import { VendorFillter } from 'src/app/models/v-fillter';

export interface VendoModel {
  vendorName: string,//
   id:number,//
   website: string,
   emailAddress:string,//
   praimaryPhoneNumber:string,//
   leadTime:number,
   paymentMethod:PaymentMethod,
   shippingMethod:ShippingMethod,
}

type AOA = any[]

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
  providers:[VendorService]
})


export class VendorComponent implements OnInit {
  [x: string]: any;
  public vendormodel:VendoModel
  public vendoruploadlist:VendorList
  public vendorfillter :VendorFillter
  displayedColumns: string[] = ['chked', 'vendorID', 'Vname','Vemail','phone','paymentmethod','time','SHIPPING','actions'];
  selection = new SelectionModel<VendoModel>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private dialog : MatDialog,private  _vendortService: VendorService  ){}

   
ngOnInit(){
  this.vendoruploadlist=new VendorList(0,null)
  this._vendortService.getAllVendors(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response => {
  this.dataSource= new MatTableDataSource<VendoModel>(Response);
  this.dataSource.paginator = this.paginator;

})
 this.vendorfillter=new VendorFillter (false,false,false,false,false,false,0),
 this.vendorfillter.accountId=JSON.parse(localStorage.getItem('accountid'));

 this.vendormodel=this.dataSource;

 console.log('hii',this.dataSource)
 console.log()

}

FiltterValues()
{
  console.log('filltrvalues',this.vendorfillter)
  this._vendortService.VendorFillter(this.vendorfillter).subscribe(Response=>{console.log('fiiilterrr',Response)
 this.dataSource=Response
 
}
  
  )
  

}
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
////////////////filter////////////////
sidebarOpen=false;
togglesidbar(){
  this.sidebarOpen=!this.sidebarOpen;
}
//////////////////////////////////////
onCreat():void{

  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus=true;
  this.dialog.open(  VendorModaleComponent , {
    height: '505px',
    width: '1000px', 
    
  }).afterClosed().subscribe(Response=>{
    console.log(Response)
    this.ngOnInit() ; 

  }) 
  this.ngOnInit() ; 
}

selectedrow(vendor:VendoModel)
{
 
//  console.log('kk' ,this._vendortService.getVendor(vendor.id));
  this.dialog.open(  RowrecordComponent , { height: '450px',width: '1000px',data:vendor.id}).afterClosed().subscribe(()=>this.ngOnInit());
}

data: AOA = [["vendorName",	"vendorCode",	"website",	"leadTime",	"paymentMethodName",	"emailTemplateName"	,"contactFirstName"	,"contactLastName",	"emailAddress",	"praimaryPhoneNumber",	"secondryPhoneNumber",	"faxNumber",	"shippingAddress",	"shippingAddress2",	"shippingCity",	"shippingState",	"shippingCountry",	"shippingZip",	"billingAddress1",	"billingAddress2",	"billingCity"	,"billingState",	"billingCountry",	"status",	"shippingMethodName"]];
wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
fileName: string = 'Vendor-Templete.xlsx';

ExcelTemplete():void{
  /* generate worksheet */
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */
  XLSX.writeFile(wb, this.fileName);
  }
updateVendor(vendor:VendoModel)
{
  this.dialog.open(  UpdatevendorComponent , { height: '465px',width: '1000px',data:vendor.id}). afterClosed().subscribe(Response=>
    {console.log(Response)}); 
}
ExcelRows:any;
/////////////////////////////upload//////////////////////////////////////////
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
    console.log('ExcelRows',this.ExcelRows);

   this.vendoruploadlist= new VendorList(JSON.parse(localStorage.getItem('accountid')),this.ExcelRows)
   console.log('vendoruploadlist',this.vendoruploadlist);

console.log(this.vendoruploadlist)
 this._vendortService.UploadVendor(this.vendoruploadlist).subscribe(Response=>
  {console.log('hii',Response)
  this.ngOnInit() ; })

  

  };
  reader.readAsBinaryString(target.files[0]);
}

///////////////////////serch//////////////
applayFilter(filtervalue:string){
  
  this.dataSource.filter=filtervalue.trim().toLocaleLowerCase();
}


checkValue(filtervalue:string){
  this.dataSource.filter=filtervalue;
}

reloadPage() {
  window.location.reload();
}

}
