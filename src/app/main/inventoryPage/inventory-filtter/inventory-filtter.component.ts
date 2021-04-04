import { Component, OnInit } from '@angular/core';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'app-inventory-filtter',
  templateUrl: './inventory-filtter.component.html',
  styleUrls: ['./inventory-filtter.component.scss'],
  providers:[InventoryComponent]
})
export class InventoryFiltterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sidebarOpen=false;
togglesidbar(){
  this.sidebarOpen=!this.sidebarOpen;
}


}