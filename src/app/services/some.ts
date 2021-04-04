import { data } from 'jquery';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {constructor(private http: HttpClient) {}
        getData() {
            console.log('account')
        }}
//      let url ="https://localhost:5001/api/Accounts";
//      let Account;
     
//     this.http.get(url).subscribe((data)=>
//     {console.warn("get api data", data)})
    
//     // return Account;
//     // console.log('account', Account)
//   }
