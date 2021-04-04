import { EmailTemplate } from "../models/emailtempleat";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class EmailTempleteSevice{
    constructor(private httpClient: HttpClient){}


    public createEmaileTepmlete(body:EmailTemplate)
    {
        return this.httpClient.post<EmailTemplate>("https://localhost:5001/api/EmailTemplate/CreateEmailTemplate", body)

    }

    public DeleteEmailTemplete()
    {
        return this.httpClient.delete<EmailTemplate>("https://localhost:5001/")
    }

    public getAllEmailTepmlete(accountId: number):Observable<any> 
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.get<Array<EmailTemplate>>("https://localhost:5001/api/EmailTemplate/GetAllEmails?accountId="+accountId,{ headers: httpHeaders });

    }
    

    public getEmailTepmlete(emailId: number):Observable<any> 
    {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

        return this.httpClient.get<Array<EmailTemplate>>("https://localhost:5001/api/EmailTemplate/GetEmailTemplate?emailId="+emailId,{ headers: httpHeaders });

    }

    public updateEmailTepmlete(body:EmailTemplate): Observable<any> {
    
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put<EmailTemplate>("https://localhost:5001/api/EmailTemplate/UpdateEmailTemplate", body,{ headers: httpHeaders })
    }
}