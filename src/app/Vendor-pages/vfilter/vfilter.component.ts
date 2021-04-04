import { Component, OnInit } from '@angular/core';
import { VendorFillter } from 'src/app/models/v-fillter';
import { VendorService } from 'src/app/services/vendor_service';
import { VendoModel } from '../rowrecord/rowrecord.component';
import { VendorComponent } from '../vendor/vendor.component';

@Component({
  selector: 'app-vfilter',
  templateUrl: './vfilter.component.html',
  styleUrls: ['./vfilter.component.scss'],
  providers:[VendorService]
})
export class VfilterComponent implements OnInit {
  public vendormodel:VendoModel
  public vendorfillter :VendorFillter
  constructor(private _vendorService:VendorService) { }
  
  ngOnInit(): void {
    this.vendorfillter=new VendorFillter (false,false,false,false,false,false,0),
    this.vendorfillter.accountId=JSON.parse(localStorage.getItem('accountid'));
  }

FiltterValues()
{
  console.log('filltrvalues',this.vendorfillter)
  this._vendorService.VendorFillter(this.vendorfillter).subscribe(Response=>{console.log('fiiilterrr',Response)})
  
}

}
