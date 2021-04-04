import { Account } from '../models/account';
import { ServiceFailure } from './service-failure';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';



@Injectable()
export class LoginService extends ServiceFailure {

    public accountId:number


    constructor(private httpClient: HttpClient) {
        super();
    }


    public createAccount(body: Account): Observable<any> {

        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        console.log('zzzz', body)
        return this.httpClient.post("https://localhost:5001/api/Accounts/CreateAccount", body, { headers: httpHeaders });
        console.log('hi');
    }

    public authenticateRequest(body: Login): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post("https://localhost:5001/api/Users/login", body, { headers: httpHeaders })
    }
}