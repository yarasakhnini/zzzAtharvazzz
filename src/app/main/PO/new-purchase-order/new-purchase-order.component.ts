import { jsPDF } from 'jspdf';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { InteractionService } from 'src/app/interaction.service';
import { AddOrderComponent, PoModale } from '../add-order/add-order.component';
import html2canvas from 'html2canvas'
import { Vendorinformation } from 'src/app/models/vemdorInfo.serveces';
import { VendorService } from 'src/app/services/vendor_service';
import { PurchaseOrder } from 'src/app/services/purchase-order.service';
import { NewPOModel, PurchaseOrderViewModel } from 'src/app/models/newPurchaseOrder';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.scss'],
  providers:[VendorService,PurchaseOrder]
})
export class NewPurchaseOrderComponent implements OnInit {
  displayedColumns: string[] = ['chked','SKU', 'PRODCUTNAME','UNITCOST','QUANTITY','TotalCost','actions'];
  ShippingToForm:FormGroup
  submitted = false;
  public purchaseOrderViewModel:PurchaseOrderViewModel
  public vendorinformation:Vendorinformation
  ELEMENT_DATA: any;
  productsList:any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 @ViewChild('content') content:ElementRef;
  @Output() toggelsidefilter: EventEmitter<any>=new EventEmitter();
  


  constructor(private dialog : MatDialog  ,private interactionService :InteractionService,private _vendorService: VendorService, private _PurchaseOrder:PurchaseOrder,private formBuilder: FormBuilder ,private router: Router) { }

  ngOnInit(): void {
    this.setVendorInformation()
    this.purchaseOrderViewModel=new PurchaseOrderViewModel(0,null,null,null,0,null,0,null,null,null,null,null,null,0,0,null,null,null,null,null,0,null,0,0,0,null)
    this.purchaseOrderViewModel.vendorId=JSON.parse(localStorage.getItem('VendorId'));
    this.purchaseOrderViewModel.id= JSON.parse(localStorage.getItem('purchaseid'))


      this.ShippingToForm=this.formBuilder.group({receivingAddress1: ['', Validators.required],
      receivingAddress2: ['', Validators.required],receivingCity: ['', Validators.required],receivingState: ['', Validators.required],
      receivingCountry: ['', Validators.required],receivingZip: ['', Validators.required],
    });
  }
  get f() { return this.ShippingToForm.controls; }
  setVendorInformation(){
    this._vendorService.getVendorinfo(JSON.parse(localStorage.getItem('VendorId'))).subscribe(Response=>
      this.vendorinformation=Response)
  }



  onSubmit() {
    this.submitted = true;
    if (this.ShippingToForm.invalid) {
      return;
  }

    console.log('**********',this.purchaseOrderViewModel.products);
    console.log('xxxxx',this.purchaseOrderViewModel.accountId)
    console.log('xxxxx',this.purchaseOrderViewModel)
    console.log("parchase order",this.purchaseOrderViewModel)
    this._PurchaseOrder.CompleatePurchaseOrder(this.purchaseOrderViewModel).subscribe(Response=>
     { console.log('resss',Response)}
      
    )
    this.router.navigateByUrl('/purchaseOrder')

    }
    
  ExcelRows:any
  onCreat():void{

    this.purchaseOrderViewModel.vendorName=this.vendorinformation.vendorName;
    this.purchaseOrderViewModel.leadTime=this.vendorinformation.leadTime;
    this.purchaseOrderViewModel.shippingAddress1=this.vendorinformation.shippingAddress1;
    this.purchaseOrderViewModel.shippingAddress2=this.vendorinformation.shippingAddress2;
    this.purchaseOrderViewModel.shippingCity=this.vendorinformation.shippingCity;
    this.purchaseOrderViewModel.shippingZipCode=this.vendorinformation.shippingZip;
    this.purchaseOrderViewModel.shippingCountry=this.vendorinformation.shippingCountry;
    this.purchaseOrderViewModel.shippingState=this.vendorinformation.shippingState;
    this.purchaseOrderViewModel.website=this.vendorinformation.website;
    this.purchaseOrderViewModel.paymentMethod=this.vendorinformation.paymentMethod.paymentMethodName;
    this.purchaseOrderViewModel.vendorCode='1'
    this.purchaseOrderViewModel.accountId=JSON.parse(localStorage.getItem('accountid'));

    const dialogConfig=new MatDialogConfig();
    this.dialog.open(  AddOrderComponent , {
      height: '500px',
      width: '1000px'
      
    }
    )
    .afterClosed().subscribe(result => {
      if(this.interactionService.saveclicked)
    {

      this.dataSource.data.push(this.interactionService.model)
      console.log('xxxxxxxxxx',this.interactionService.model.sku)
      console.log('xxxxxxxxxx',this.dataSource.data.includes(this.interactionService.model.sku))

      this.dataSource.data=[...this.dataSource.data];
      this.dataSource.paginator = this.paginator;
      this.purchaseOrderViewModel.products=this.dataSource.data
      this._PurchaseOrder.addOrDeletePurchaseOrder(this.purchaseOrderViewModel).subscribe(Response=>
        { console.log('pppppppppppppp',Response)
          this.purchaseOrderViewModel.subCost=Response.subCost;
          this.purchaseOrderViewModel.tax=Response.tax;
          this.purchaseOrderViewModel.totalCost=Response.totalCost;
  })

  console.log("+++++++++++++++++++++++++",this.purchaseOrderViewModel);;
  console.log('llloo')

  this.interactionService.saveclicked=false;
}
console.log(this.interactionService.saveclicked)

  });
  }



 public dataSource = new MatTableDataSource<NewPOModel>();

applayFilter(filtervalue:string){
  this.dataSource.filter=filtervalue.trim().toLowerCase();
}

checkValue(filtervalue:string){
  this.dataSource.filter=filtervalue;
}

sidebarOpen=false;
togglesidbar(){
  this.sidebarOpen=!this.sidebarOpen;
}

downloadePdf(){

  var element = document.getElementById('content')
  console.log('canvas',element) 
  html2canvas(element ).then((canvas)=>{
   var imgWidth = 208
   var imgHeight=canvas.height*imgWidth/canvas.width;
   console.log('height',imgHeight,'canvas',canvas)
    var imgData=canvas.toDataURL('image/png')
console.log('image data', imgData)
    let doc = new jsPDF();
    doc.addImage(imgData,0,0,imgWidth,imgHeight)
    doc.save('POdata.pdf')
  })
}

DeleteProduct(row:PoModale)
{  console.log('delete',row)
this.interactionService.getdata(row);
this.interactionService.saveclicked=true;

const index =this.dataSource.data.indexOf(this.interactionService.model,0)
console.log('data source befor delete',this.dataSource.data)

      if (index > -1) {
        this.dataSource.data.splice(index,1);
        this.table.renderRows()
      }
      this.dataSource.data = this.dataSource.data;
      console.log('data source after delete',this.dataSource.data)

      this.purchaseOrderViewModel.products=this.dataSource.data

      this._PurchaseOrder.addOrDeletePurchaseOrder(this.purchaseOrderViewModel).subscribe(Response=>
        {
         this.purchaseOrderViewModel.subCost=Response.subCost;
         this.purchaseOrderViewModel.tax=Response.tax;
         this.purchaseOrderViewModel.totalCost=Response.totalCost;
       }
        )

  console.log('data source after delete',this.dataSource.data)

}
}
