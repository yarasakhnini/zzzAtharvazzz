import { element } from 'protractor';
import { VendorService } from 'src/app/services/vendor_service';
import {AfterViewInit, Component, ViewChild,OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { SelectVendorsComponent } from '../select-vendors/select-vendors.component';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';
import { PurchaseOrder } from 'src/app/services/purchase-order.service';
import { data } from 'jquery';
import { ProductFillter } from 'src/app/models/p-filtter';
import { PurchaseOrderFillter } from 'src/app/models/po-fillter';
import { SelectionModel } from '@angular/cdk/collections';
import { POrecordComponent } from '../porecord/porecord.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/services/VendorName.service';

/**
 * @title Table with pagination
 */
export class POsataus{
  constructor(
  public statusname:string,
  public id:number){}
}



export interface POList {
  
   vendor:{
      id: number,
      vendorName: string,
      emailAddress : string,
      praimaryPhoneNumber: string
   }
      poDate: Date,
      status: number,
     id: number
  
}
  

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  providers:[PurchaseOrder,VendorService]
})


export class PurchaseComponent implements OnInit {
  [x: string]: any;
  statusname:number
  public poList:POList
  public productFillter:ProductFillter
  public purchaseOrderFillter:PurchaseOrderFillter
  Vendor:Vendor
  // public newStatusList:UpdataPOsataus;
  public listOfOldId:any[]
  selection = new SelectionModel<POList>(true, []);
  private id :number=0;


  displayedColumns: string[] = ['chked','Vendorid', 'VendorName', 'VendorEmail','Phone','POdate','POnumber','POstatus','actions'];
  constructor(public dialog: MatDialog, private _PurchaseOrder:PurchaseOrder,private _vendorService: VendorService, private route: Router ) {
  }
//  status:POsataus[]
// StatusId:number[]
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatTable,{static:true}) table: MatTable<any>;

 ngOnInit(): void {

  this.status=[{statusname:'Cancel PO',id:5},{statusname:'Submit PO to Vendor',id:1},
  {statusname:'Emailed PO',id:6},{statusname:'waiting Receipt',id:2},{statusname:'Duplicate',id:7},
  {statusname:'Closed',id:4},{statusname:'Receiving',id:3},{statusname:'Cancel PO',id:5},
]
this.setVendorLest()
   this._PurchaseOrder.getAllPurchaseOrder(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
   this.dataSource=new MatTableDataSource<POList>(Response);
   this.dataSource.paginator = this.paginator;
    console.log(Response)
    this.poList= this.dataSource;
    })  
  this.ProductStatus()
  this.purchaseOrderFillter=new PurchaseOrderFillter(0,0,false,false,false,false,false,false,false,null,null)
  this.purchaseOrderFillter.accountId=JSON.parse(localStorage.getItem('accountid'));
  // this.purchaseOrderFillter.vendorId=JSON.parse(localStorage.getItem('VendorId'));

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
  console.log('hiiiiiiiiiiiii')
  console.log('filltrvalues',this.purchaseOrderFillter)
  this._PurchaseOrder.PurchaseOrderFillter(this.purchaseOrderFillter).subscribe(Response=>{console.log('fiiilterrr',Response)
 this.dataSource=Response})
}


ProductStatus()
{
for(var i=0; i <status.length;i++)
{
  if(this.status[i].id==this.poList.status)
      this.statusname=this.status[i].statusname;
  console.log('zzzzzzz',this.statusname)
}
}




updatestatus(newStatusID:number,OldpurchaseOrderId:number){
  this.listOfOldId=[]
  // this.newStatusList=new UpdataPOsataus([])
console.log(' old id ',OldpurchaseOrderId)
console.log('new status ',newStatusID)

this.listOfOldId.push(OldpurchaseOrderId)
console.log('newStatusList.listOfOldId',this.listOfOldId)
this._PurchaseOrder.UpdatePurchaseOrderStatus(newStatusID,JSON.parse(localStorage.getItem('accountid')),this.listOfOldId).subscribe(Response=>console.log(Response))
}


  sidebarOpen=false;
togglesidbar(){
  this.sidebarOpen=!this.sidebarOpen;
}

applayFilter(filtervalue:string){
  this.dataSource.filter=filtervalue.trim().toLowerCase();
}
selectVendors()
{
   this.dialog.open(SelectVendorsComponent, {width: '500px', height:'300px'})
   
}

isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.length;
  return numSelected === numRows;
}

masterToggle() {
  this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
    console.log(this.selection)
}

selsectedDUpdatedStatusRows:number[]
UpdateStatusSelection(newStatusID:number) {
this.selsectedDUpdatedStatusRows=[];
  this.selection.selected.forEach(s => {
    this.selsectedDUpdatedStatusRows.push(s.id)
  })
  console.log('selsectedDeletedRows',this.selsectedDUpdatedStatusRows) 
  this._PurchaseOrder.UpdatePurchaseOrderStatus(newStatusID,JSON.parse(localStorage.getItem('accountid')),this.selsectedDUpdatedStatusRows).subscribe()
  window.location.reload()
  

}

selectedrow(id:number){
  // this.x.open(POrecordComponent , {  height: '2500px',width: '2500px',data:pOList.id})
  console.log('---------------',id)
  this.route.navigate(['PurchaseOrderRecord', {idx: id}]);

}
DeletedRows:number[]
DeletePOMETHOD(id:number)
{
  console.log('--------',id)
  this.DeletedRows=[]
  this.DeletedRows.push(id)
  this._PurchaseOrder
  this._PurchaseOrder.DeletePO(JSON.parse(localStorage.getItem('accountid')),this.DeletedRows).subscribe(Response=>
    {console.log(Response)
      this.ngOnInit() ; 
    })
}
UpdatePOMETHOD(id:number){
    console.log(id)
    this.route.navigate(['UpdatePurchaseOrder', {idx:id}]);
}

}


