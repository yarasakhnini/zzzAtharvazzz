import { Product } from './../models/Inventory';
import { Vendors } from 'src/app/models/vendors';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceFailure } from './service-failure';
import { VendorList } from '../models/vendorList';
import { ProductList } from '../models/productlist';
import { PoModale } from '../main/PO/add-order/add-order.component';
import { ProductFillter } from '../models/p-filtter';
import { ProductRow } from '../main/inventoryPage/row-record/row-record.component';
// import { NewProductModale } from '../main/PO/add-order/add-order.component';

@Injectable()
export class ProductService extends ServiceFailure {

    // accountId:number,
    constructor(private httpClient: HttpClient) {
        super();
    }


    public getProduct(productId: number): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
      
        return this.httpClient.get<Product>("https://localhost:5001/api/Products/GetProduct?productId="+productId, { headers: httpHeaders })
    }

    public UploadProduct(body:ProductList) {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
      
        return this.httpClient.put<ProductList>("https://localhost:5001/api/Products/UploadAllProduct",body,{ headers: httpHeaders })
    }

    public postProduct(body: Product): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post<Product>("https://localhost:5001/api/Products/CreateProduct", body, { headers: httpHeaders })
    }

    public getAllProduct(accountId: number): Observable<any> {
    
            const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Array<VendorList>>("https://localhost:5001/api/Products/GetAllProduct?accountId="+accountId, { headers: httpHeaders })
    }
      public ProductFillter(body:ProductFillter) : Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post<ProductFillter>("https://localhost:5001/api/Products/FilterProducts", body, { headers: httpHeaders })
    }

    public getAllProductByVendorId(vendorId: number): Observable<any> {
    
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get<Array<PoModale>>("https://localhost:5001/api/Products/GetAllProduct/VendorId?vendorId="+vendorId, { headers: httpHeaders })
}

public updateProduct(body:Product): Observable<any> {
    
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
return this.httpClient.put<Product>("https://localhost:5001/api/Products/UpdateProduct", body,{ headers: httpHeaders })
}

public DeleteProducts(accountId:number,body:number[]): Observable<any> {
    
    const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body:body,
      };
return this.httpClient.delete<number[]>("https://localhost:5001/api/Products/DeleteProducts?accountId="+accountId,options )
}



}