import { Vendors } from 'src/app/models/vendors';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceFailure } from './service-failure';
import { VendorList } from '../models/vendorList';
import { VendoModel } from '../Vendor-pages/rowrecord/rowrecord.component';
 import { Vendor } from './VendorName.service';
import { Vendorinfo } from '../main/inventoryPage/inventory/inventory.component';
import { Vendorinformation } from '../models/vemdorInfo.serveces';
import { VendorFillter } from '../models/v-fillter';

@Injectable()
export class VendorService extends ServiceFailure {

    // accountId:number,
    constructor(private httpClient: HttpClient) {
        super();
    }

    public getVendor(VendorId: number): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
      
        return this.httpClient.get<Vendors>("https://localhost:5001/api/Vendors/GetVendor?vendorId="+VendorId, { headers: httpHeaders })
    }


    public UploadVendor(body:VendorList) {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
      
        return this.httpClient.put<VendorList>("https://localhost:5001/api/Vendors/UploadAllVendors",body,{ headers: httpHeaders })
    }

    public postVendor(body: Vendors): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post<Vendors>("https://localhost:5001/api/Vendors/CreateVendor" , body, { headers: httpHeaders })
    }

    public getAllVendors(accountId: number): Observable<any> {
    
            const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Array<Vendors>>("https://localhost:5001/api/Vendors/GetAllVendors?accountId="+accountId, { headers: httpHeaders })
    }

    public updateVendor(body:VendoModel): Observable<any> {
    
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put<VendoModel>("https://localhost:5001/api/Vendors/UpdateVendor", body,{ headers: httpHeaders })
}

    public getVendorsname(accountId: number):Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Array<Vendor>>("https://localhost:5001/api/Vendors/GetAllVendorsDDL?accountId=" + accountId, { headers: httpHeaders });
 
    }

    public getVendorinfo(vendorId: number):Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Vendorinformation>("https://localhost:5001/api/Vendors/GetVendorInformation?vendorId=" + vendorId, { headers: httpHeaders });
 
    } 

    public VendorFillter(body:VendorFillter):Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post<VendorFillter>("https://localhost:5001/api/Vendors/FilterVendors" , body,{ headers: httpHeaders });
 
    } 
}



