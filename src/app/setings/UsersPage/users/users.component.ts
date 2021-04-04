import { data } from 'jquery';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/users.service';
import { AddUsersComponent } from '../add-users/add-users.component';
import * as XLSX from 'xlsx';
import { UserList } from 'src/app/models/UsersList';
import { LoginService } from 'src/app/services/login_service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordStrengthValidator } from 'src/app/auth/creataccount/password-strength-validator';

/**
 * @title Table with pagination
 */

export interface UserViewModel {

  email: string,
  firstName: string,
  id: number
  lastName: string,
  phoneNumber: string,
  role: string,
  status: string,
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService,LoginService]
})
export class UsersComponent implements OnInit {
  [x: string]: any;

  nuser: UserViewModel
  statusTitle:string
  //loginid:LoginComponent
  userslistmodel:UserList
  displayedColumns: string[] = ['chked', 'fname', 'lname', 'phone', 'email', 'status'];
  selection = new SelectionModel<UserViewModel>(true, []);
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(public dialog: MatDialog, private _userService: UserService,private _loginSerivce: LoginService ,) { }
  ngOnInit(): void {
 
    this._userService.getAllUsers(JSON.parse(localStorage.getItem('accountid'))).subscribe(Response => {
      this.dataSource= new MatTableDataSource<UserViewModel>(Response);
      this.dataSource.paginator = this.paginator;
      this.nuser = Response;
      console.log('data', this.nuser)
    })


  }

  addUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddUsersComponent, {
      height: '340px',
      width: '450px'

    }).afterClosed().subscribe(Response=>{
      {console.log(Response)
      this.ngOnInit();
    }})
    
      }
  ExcelRows:any;

  onFileChange(evt: any) {
  /* wire up file reader */
  const target: DataTransfer = <DataTransfer>(evt.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    /* read workbook */
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    
    this.ExcelRows=XLSX.utils.sheet_to_json(ws);
    console.log(this.ExcelRows);

   this.userslistmodel= new UserList(JSON.parse(localStorage.getItem('accountid')),this.ExcelRows)
console.log(this.userslistmodel)
 this._userService.UploadUsers(this.userslistmodel).subscribe(Response=>
 { console.log('res',Response)
 this.ngOnInit() ;}
  )
 console.log('hii')
  };
  reader.readAsBinaryString(target.files[0]);
}

  ondisactive(user:UserViewModel) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(DeactiveUsers, {
      height: '200px',
      width: '450px',data:user

    }).afterClosed().subscribe(res => {
console.log('status',res);
this.ngOnInit()
    });;
  }

userActveStatus(status:string)
{
  if(status==="1")
   {   this.statusTitle="Active"
     return true
    }
      else return false

}

userdectveStatus(status:string)
{
  if(status==="2")
  {
    this.statusTitle="Deactive"
      return true
  }
      else return false
}

}

@Component({
  selector: 'app-users',
  templateUrl: './deactiveusers.components.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class DeactiveUsers implements OnInit {
 constructor(private  _userService:UserService,@Inject(MAT_DIALOG_DATA) public user){}
msg:string
yesmsg:string
nomsg:string
status:number
  ngOnInit(): void {

  }

  ActiveMsg()
  {
    if(this.user.status==="1")
    {
      this.msg="are you sure that you want to deactivate this user?"
          return true
    }
    else {
      this.msg="are you sure that you want to activate this user?"
      return false
    }
    
  
  }
  Active()
  {
    if(this.user.status==="1")
    {
    return true
    }
    else return false
  }
  
  Deactive()
  {
    if(this.user.status==="2")
    {
    return true
    }
    else return false
  }

  deactive() {
    if(this.user.status==="1")
      this.status=2
      else
      this.status=1
    
    this._userService.changeUserStatus(this.user.id,this.status).subscribe(Response=>{
      console.log(Response)
      window.location.reload();
    })
  }

}
