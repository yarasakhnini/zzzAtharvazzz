import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AddPaymentMethodComponent ,AddShipingMethodComponent} from '../add-method/add-method.component';
import { MethodsService } from 'src/app/services/methods.service';
import { CompanyInfo } from 'src/app/models/companyinfo';

export interface PaymentMethodModel {
  paymentMethodName: string,
  id:number 
}
export interface ShippingMethodModel {

  shippingMethodName: string,
  id:number 
}

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  providers:[MethodsService],
})
export class CompanyInfoComponent implements OnInit {

  
   dataSource1 : any
   dataSource2:any

  companyinfo:CompanyInfo
  paymentmethodmodel:PaymentMethodModel
  shippingmethodmodel:ShippingMethodModel
  displayedColumns: string[] = ['chked','SHIPPING-METHOD-NAME','actions'];
  displayedColumns2: string[] = ['chked','Payment-METHOD-NAME','actions']; 
  @ViewChild(MatPaginator) paginator1: MatPaginator;
  @ViewChild(MatPaginator) paginator2: MatPaginator;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private dialog : MatDialog,private _methodservice:MethodsService) { }
  ngOnInit(): void {
    this._methodservice.getCompanyInfo(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
      this.companyinfo=Response;
    })

    this._methodservice.getAllPaymentMethods(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
     this.dataSource1 = new MatTableDataSource<PaymentMethodModel>(Response);
      this.paymentmethodmodel=Response;
    })
    //console.log(JSON.parse(localStorage.getItem('accountId')))

    this._methodservice.getShippingMethods(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
      this.dataSource2 = new MatTableDataSource<ShippingMethodModel>(Response);
      this.shippingmethodmodel=Response;
    })
  }
  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator1;
    this.dataSource2.paginator= this.paginator2;
  }


 onCreat():void{
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus=true;
  this.dialog.open(  AddPaymentMethodComponent , {
    height: '300px',
    width: '450px'
  
  }).afterClosed().subscribe(Response=>
    {console.log(Response)
      this.ngOnInit() ; 
    })
}

onchange():void{
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=false;
  dialogConfig.autoFocus=true;
  this.dialog.open(  AddShipingMethodComponent , {
    height: '300px',
    width: '450px'
  }).afterClosed().subscribe(Response=>
    {console.log(Response)
      this.ngOnInit() ; 
    })
}


DeletePaymentMETHOD(id:number)
{
this._methodservice.DeletePaymentMethod(id).subscribe(Response=>
{ console.log(Response)
    this.ngOnInit() ; 
  })
}



DeleteShippingMETHOD(id:number)
{ 
   this._methodservice.DeleteShippingMethod(id).subscribe(Response=>
    { console.log(Response)
        this.ngOnInit() ; 
      })
    }
  
}






