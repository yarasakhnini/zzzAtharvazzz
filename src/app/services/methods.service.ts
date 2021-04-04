import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CompanyInfo } from "../models/companyinfo";
import { PaymentMethod } from "../models/payment-method";
import { ShippingMethod } from "../models/shipping-method";

@Injectable()
export class MethodsService {

    constructor(private httpClient: HttpClient){}

    public getCompanyInfo(accountId: number):Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<CompanyInfo>("https://localhost:5001/api/Accounts/GetAccountInformation?accountId=" + accountId, { headers: httpHeaders });
 
    }


    public createPaymentMethode(body:PaymentMethod)
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        
        return this.httpClient.post<PaymentMethod>("https://localhost:5001/api/PaymentMethod/AddPaymentMethod", body,{ headers: httpHeaders })

    }

    public getAllPaymentMethods(accountId: number):Observable<any>{
        
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Array<PaymentMethod>>("https://localhost:5001/api/PaymentMethod/GetAllPayments?accountId=" + accountId, { headers: httpHeaders });
 
    }

    createShppingMethod(body:ShippingMethod)
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.post<ShippingMethod>("https://localhost:5001/api/ShippingMethod/AddShippingMethod", body,{ headers: httpHeaders })

    }

    public getShippingMethods(accountId: number):Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Array<ShippingMethod>>("https://localhost:5001/api/ShippingMethod/GetAllShippingMethods?accountId=" + accountId, { headers: httpHeaders });
 
    }

    public DeletePaymentMethod(paymentId:number):Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.delete("https://localhost:5001/api/PaymentMethod/DeletePayment?paymentId=" + paymentId, { headers: httpHeaders });
 
    }
    public DeleteShippingMethod(shippingMethodId:number):Observable<any>{
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.delete("https://localhost:5001/api/ShippingMethod/DeleteShippingMethod?shippingMethodId=" + shippingMethodId, { headers: httpHeaders });
 
    }
}