import { Product } from './../models/Inventory';
import { Vendors } from 'src/app/models/vendors';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceFailure } from './service-failure';
import { VendorList } from '../models/vendorList';
import { ProductList } from '../models/productlist';
import { ParchaseOrder } from '../models/PurchaseModel';
import { PurchaseOrderFillter } from '../models/po-fillter';
import { productPurshaceOrderlist } from '../models/productPurshaceOrderlist';
import { PurchaseOrderViewModel } from '../models/newPurchaseOrder';

@Injectable()
export class PurchaseOrder extends ServiceFailure {

    // accountId:number,
    constructor(private httpClient: HttpClient) {
        super();
    }
    // listOfOldId:number[]

    public CreatePurchaseOrder(body:PurchaseOrderViewModel): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post<PurchaseOrderViewModel>("https://localhost:5001/api/PurchaseOrders/CreatePurchaseOrder", body, { headers: httpHeaders })
    }

    public CompleatePurchaseOrder(body:PurchaseOrderViewModel): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put<PurchaseOrderViewModel>("https://localhost:5001/api/PurchaseOrders/CompletePurchaseOrder", body, { headers: httpHeaders })
    }

    public addOrDeletePurchaseOrder(body:PurchaseOrderViewModel): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.put<PurchaseOrderViewModel>("https://localhost:5001/api/PurchaseOrders/AddOrDeleteProducts", body, { headers: httpHeaders })
    }

    public AddPurchaseOrderProducts(body:productPurshaceOrderlist): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post<productPurshaceOrderlist>("https://localhost:5001/api/PurchaseOrders/AddPurchaseOrderProducts" , body,{ headers: httpHeaders })
    }


    public getAllPurchaseOrder(accountId: number): Observable<any> {
    
            const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Array<VendorList>>("https://localhost:5001/api/PurchaseOrders/GetAllPurchaseOrder?accountId="+accountId, { headers: httpHeaders })
    }


    public getAllProductByVendorId(vendorId: number): Observable<any> {
    
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.get<Array<VendorList>>("https://localhost:5001/api/Products/GetAllProduct/VendorId?vendorId="+vendorId, { headers: httpHeaders })
}

public getPurchaseOrderDetails(purchaseOrderId: number): Observable<any> {
    
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
return this.httpClient.get<PurchaseOrderViewModel>("https://localhost:5001/api/PurchaseOrders/GetPurchaseOrderDetials?purchaseOrderId="+purchaseOrderId, { headers: httpHeaders })
}



public UpdatePurchaseOrderStatus(newStatus:number,accountId:number,body:number[]): Observable<any> {
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put<number[]>("https://localhost:5001/api/PurchaseOrders/UpdatePurchaseOrderStatus?newStatus="+newStatus+"&accountId="+accountId, body, { headers: httpHeaders })
}
public PurchaseOrderFillter(body:PurchaseOrderFillter) : Observable<any>{
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post<PurchaseOrderFillter>("https://localhost:5001/api/PurchaseOrders/FilterPurchaseOrder", body, { headers: httpHeaders })
}

public DeletePO(accountId:number,body:number[]):Observable<any>{
    const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body:body,
      };
          return this.httpClient.delete<number[]>("https://localhost:5001/api/PurchaseOrders/DeletePurchaseOrderByIds?accountId=" + accountId, options);

}
}