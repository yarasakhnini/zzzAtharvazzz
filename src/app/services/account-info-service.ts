import { EmailTemplate } from "../models/emailtempleat";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountInfo } from "../models/accountInfo";
import { UpdateAccountInfo } from "../models/updateaccountInfo";
import { UpdateAccountPassword } from "../my-account/my-account.component";

@Injectable()

export class AccountInfoeSevice{
    constructor(private httpClient: HttpClient){}

    public GetAccountForEdit(accountId: number):Observable<any> 
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.get<Array<UpdateAccountInfo>>("https://localhost:5001/api/Accounts/GetAccountForEdit?accountId="+accountId,{ headers: httpHeaders });

    }
    public GetAccount(accountId: number):Observable<any> 
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.get<Array<AccountInfo>>("https://localhost:5001/api/Accounts/GetAccountForEdit?accountId="+accountId,{ headers: httpHeaders });

    }

    public updateInfo(body:UpdateAccountInfo): Observable<any> {
    
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put<UpdateAccountInfo>("https://localhost:5001/api/Accounts/UpdateAccountInfo", body,{ headers: httpHeaders })
    }

    
    public updatePassword(body:UpdateAccountPassword): Observable<any> {
    
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put<UpdateAccountPassword>("https://localhost:5001/api/Accounts/UpdateAccountPassword", body,{ headers: httpHeaders })
    }
}