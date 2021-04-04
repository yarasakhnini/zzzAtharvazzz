import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { UserList } from '../models/UsersList';
import { ServiceFailure } from './service-failure';
import { AllUsers } from 'src/app/models/allUsers';

@Injectable()
export class UserService extends ServiceFailure{
    constructor(private httpClient: HttpClient) {
        super();
    }

    public getUser(userId: number): Observable<any> {
        const httpHeaders = new HttpHeaders({
           'Origin': 'https://localhost:4200/'

        });
        return this.httpClient.get<Users>(this.UsersUrlBuilder(userId), { headers: httpHeaders })
    }


    public UploadUsers(body:UserList) {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
      
        return this.httpClient.put<UserList>("https://localhost:5001/api/Users/UploadAllUsers",body,{ headers: httpHeaders })
    }
    
    public CreateUser(body: Users): Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.post<Users>("https://localhost:5001/api/Users/CreateUser", body, { headers: httpHeaders })
    }

    public getAllUsers(accountId: number):Observable<any> {
        const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
        return this.httpClient.get<Array<Users>>("https://localhost:5001/api/Users/GetAllUsers?accountId=" + accountId, { headers: httpHeaders });
    }
    // https://localhost:5001/api/Users/GetAllUsers?accountId=
    public updateUser(body: Users): Observable<any>{
        const httpHeaders = {headers: new HttpHeaders({'Content-Type':'application/json'})};

        return this.httpClient.put<Users>("https://localhost:5001/api/Users/UpdateUserInfo", body,  httpHeaders)
    }


    public changeUserStatus(userId:number, status:number): Observable<any>{
        const httpHeaders = {headers: new HttpHeaders({'Content-Type':'application/json'})};

        return this.httpClient.put("https://localhost:5001/api/Users/ChangeUserStatus?userId="+userId+"&status="+status,  httpHeaders)
    }
    private UsersUrlBuilder(userId: number): string {
        return "https://localhost:5001/api/Users/" + userId;
    }
    private AllUsersUrlBuilder(accountId: number): string {
        return "https://localhost:5001/api/Users/GetAllUsersByAccountId?accountId=" + accountId;
    }




}