import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InteractionService } from 'src/app/interaction.service';
import { Product } from 'src/app/models/Inventory';
import { ProductService } from 'src/app/services/product_services';
 import { Vendor } from 'src/app/services/VendorName.service';
import { VendorService } from 'src/app/services/vendor_service';


@Component({
  selector: 'app-add-modale',
  templateUrl: './add-modale.component.html',
  styleUrls: ['./add-modale.component.scss'],
  providers:[ProductService,VendorService]
})

export class AddModaleComponent implements OnInit {
  submitted = false;
  AddProductForm:FormGroup;
  Vendor:Vendor
  public productmodel:Product
  constructor(private _productServices :ProductService ,private _vendorService: VendorService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.AddProductForm=this.formBuilder.group({
      vendorName: ['', Validators.required],sku: ['', Validators.required],upcNumber: ['', Validators.required], unitCost: ['', Validators.required],Availablequantity: ['', Validators.required],
      prductName: ['', Validators.required]
    
    });
    this.setVendorLest()
    // this.setVendorName();
    this.productmodel=new Product(0,null,null,0,0,0,0,null,null,0,null,0,null,0,null,0,null,0,0,0,0,0,0,0,0,0,null,0,null,null,0)
    this.productmodel.accountId=JSON.parse(localStorage.getItem('accountid'))
  }
  get f() { return this.AddProductForm.controls; }


  setVendorLest(){
    this._vendorService.getVendorsname(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response=>{
      // console.log(Response)
     this. Vendor=Response
    })
    setTimeout(() => { this.Vendor }, 5000)

    }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AddProductForm.invalid) {
        return;
    }
    this._productServices.postProduct(this.productmodel).subscribe((data) => {
      this.success(data)
    },
      (err) => { this.error() })
  }

  success(data) {
    console.log("prodduct created" + data);
  }
  error() {
    console.log("not authorized");
  }
}
