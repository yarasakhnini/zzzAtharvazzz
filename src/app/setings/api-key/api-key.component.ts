import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent implements OnInit {


  @Output() toggelsidefilter: EventEmitter<any>=new EventEmitter();
  PeriodicElement: any;
  ELEMENT_DATA: any;

  constructor() { }

  ngOnInit(): void {
  }

  
  displayedColumns: string[] = ['chked','USERID','FIRSTNAME','LASTNAME','PHONE','EMAIL','STATUS'];
 public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  

}


export interface PeriodicElement {
  chked: boolean;
  USERID:number;
  FIRSTNAME:string;
  LASTNAME:string;
  PHONE:number;
  EMAIL:string;
  STATUS:string
}





export const ELEMENT_DATA: PeriodicElement[] = [
  { chked: false,USERID:12345,FIRSTNAME:'userFirstname',LASTNAME:'userLastName',PHONE:123,EMAIL:'user@test.com',STATUS:'Active'},
  { chked: false,USERID:12345,FIRSTNAME:'userFirstname',LASTNAME:'userLastName',PHONE:123,EMAIL:'user@test.com',STATUS:'Active'},
  { chked: false,USERID:12345,FIRSTNAME:'userFirstname',LASTNAME:'userLastName',PHONE:123,EMAIL:'user@test.com',STATUS:'Active'},


];

