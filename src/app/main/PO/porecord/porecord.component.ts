import { data } from 'jquery';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NewPOModel, PurchaseOrderViewModel } from 'src/app/models/newPurchaseOrder';
import { PurchaseOrder } from 'src/app/services/purchase-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-porecord',
  templateUrl: './porecord.component.html',
  styleUrls: ['./porecord.component.scss'],
  providers:[PurchaseOrder]
})
export class POrecordComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = ['SKU', 'PRODCUTNAME','UNITCOST','QUANTITY','TotalCost',];

  idx:any
  id:number=0
  public purchaseOrderViewModel:PurchaseOrderViewModel
  constructor(private _PurchaseOrder:PurchaseOrder,private router: ActivatedRoute,private location:Location) { }


  ngOnInit(): void {


    this.idx=this.router.snapshot.params
    this.id=this.idx.idx
    console.log(this.id)    
    this._PurchaseOrder.getPurchaseOrderDetails(this.id).subscribe(Response=>
     {   
      this.purchaseOrderViewModel=Response
       this.dataSource = new MatTableDataSource<NewPOModel>(Response.products);
     })

    console.log('**********',this.purchaseOrderViewModel)

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
}
