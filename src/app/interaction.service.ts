import { HttpClient } from '@angular/common/http';
import { VendorModaleComponent } from './Vendor-pages/modale/vendor-modale.component';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';
import { Vendors } from './models/vendors';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  constructor(private http:HttpClient){}



  model:any;
  saveclicked:boolean;
  
onsaveclicked(saveclicked=false){
this.saveclicked=saveclicked;
  }
  getdata(model){

    this.model=model;
  
    console.log(">>>>>>",model);
   
  }



  }


