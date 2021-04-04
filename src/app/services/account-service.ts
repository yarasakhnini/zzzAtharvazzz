// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// import { Account } from 'src/app/models/account';

// import { ServiceFailure } from './service-failure';


 
// @Injectable()
// export class AccountService extends ServiceFailure {
 
     
 
//     constructor(private httpClient: HttpClient){
//         super();
//     }
 
//     public getLeads(): Observable<any>{
//         const httpHeaders =  new HttpHeaders({
//             'Origin': 'https://localhost:5001/'
 
            
//         });
//         console.log("api ",  this.httpClient.get<Account>("https://localhost:5001/api/Accounts", {headers: httpHeaders}))
//         return this.httpClient.get<Account>("https://localhost:5001/api/Accounts", {headers: httpHeaders})
       
//     }
 
//     // public authenticateRequest(body: Account): Observable<any>{
//     //     const httpHeaders =  new HttpHeaders({
//     //         'Origin': 'https://localhost:4200/'
 
//     //     });
//     //     return this.httpClient.post<Account>("https://localhost:44337/api/account/login", body, {headers: httpHeaders})
//     // }
 
// }