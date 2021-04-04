import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { InteractionService } from 'src/app/interaction.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEmailComponent } from '../add-email/add-email.component';
import { EmailTempleteSevice } from 'src/app/services/email-templet.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { EmailTempleteRecordComponent } from '../email-templete-record/email-templete-record.component';


export interface EmailTmplateModel {
  id: number,
  templateName: string,
  subject:string,
  body: string
}

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss'],
  providers:[EmailTempleteSevice]
})
export class EmailTemplateComponent implements OnInit {
  [x: string]: any;
  emailmodel:EmailTmplateModel
  displayedColumns: string[] = ['chked','TemplateName', 'Subject'];
  selection = new SelectionModel<EmailTmplateModel>(true, []);
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private dialog : MatDialog ,private _emailservice :EmailTempleteSevice){}
  ngOnInit(): void {

    this._emailservice.getAllEmailTepmlete(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
      this.dataSource= new MatTableDataSource<EmailTmplateModel>(Response);
    this.emailmodel=this.dataSource;
    })
    

  }

  ExcelRows:any;

  ////////////////////////////////////popup modale////////////////////////////
  onCreat():void{
    const dialogConfig=new MatDialogConfig();
    this.dialog.open(  AddEmailComponent , {
      height: '600px',
      width: '450px'
    
    }).afterClosed().subscribe(Response=>
      {console.log('hii',Response)
      this.ngOnInit() ; })
    // afterClosed().subscribe( this._emailservice.getAllEmailTepmlete(JSON.parse(localStorage.getItem('accountid'))))
    
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
        for(let iteration in this.ExcelRows)
        this.addv(this.ExcelRows[iteration]);
        console.log('datasorce',this.dataSource.data)
      };
      reader.readAsBinaryString(target.files[0]);
    }
      

//////////////////////////////////////////////////
    sidebarOpen=false;
togglesidbar(){
  this.sidebarOpen=!this.sidebarOpen;
}


applayFilter(filtervalue:string){
  this.dataSource.filter=filtervalue.trim().toLowerCase();
}

checkValue(filtervalue:string){
  this.dataSource.filter=filtervalue;
}


/////////////////////////////////deleteRow///////////////////
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
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
   ///this._productServices.DeleteProducts(JSON.parse(localStorage.getItem('accountid')),this.selsectedDeletedRows).subscribe(Response=>console.log('Response',Response))
    
  }
  selectedrow(obj:any){
    this.dialog.open(  EmailTempleteRecordComponent , {  height: '600px',width: '450px',data:obj.id}).afterClosed().subscribe(Response=>
      {console.log('hii',Response)
      this.ngOnInit() ; })
  
}




}
