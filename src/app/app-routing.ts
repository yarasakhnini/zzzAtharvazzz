
import { MyAccountComponent } from './my-account/my-account.component';
import { CompanyInfoComponent } from './setings/CompanyInformation/company-info/company-info.component';
import { ApiKeyComponent } from './setings/api-key/api-key.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SecureComponent } from './layouts/secure/secure.component';
import { LoginComponent, WrongLoginComponent } from './auth/login/login.component';
import { UsersComponent } from './setings/UsersPage/users/users.component';
import { from } from 'rxjs';
import { ForgetComponent } from './auth/forget/forget.component';
import { ResetlinkComponent } from './auth/resetlink/resetlink.component';
import { VendorComponent } from './Vendor-pages/vendor/vendor.component';
import { InventoryComponent } from './main/inventoryPage/inventory/inventory.component';
import { PurchaseComponent } from './main/PO/purchase/purchase.component';
import { NewPurchaseOrderComponent } from './main/PO/new-purchase-order/new-purchase-order.component';
import { CreataccountComponent } from './auth/creataccount/creataccount.component';
import { EmailTemplateComponent } from './setings/EmaileTemplate/email-template/email-template.component';
import { POrecordComponent } from './main/PO/porecord/porecord.component';
import { UpdatePoComponent } from './main/PO/update-po/update-po.component';


const appRoutes: Route[] = [
  {
    path:'',redirectTo:'login',pathMatch:'full'},
    //path: '', children: [
          { path: 'WrongLogin', component: WrongLoginComponent },
          { path: 'login', component: LoginComponent },
          { path: 'CreateAccount', component: CreataccountComponent },
          {path:'ForgetPassword',component:ForgetComponent },
          {path:'ResetLink', component:ResetlinkComponent},
          { path: '', component: SecureComponent, children: [
          { path: 'Products', component: InventoryComponent },
          { path: 'Vendors', component: VendorComponent },
          { path: 'purchaseOrder', component: PurchaseComponent },
          { path: 'newPurchase', component: NewPurchaseOrderComponent },
          { path: 'PurchaseOrderRecord', component: POrecordComponent ,data : {id :0}},
          { path: 'UpdatePurchaseOrder', component: UpdatePoComponent ,data : {id :0}},          
          { path: 'myAccount', component: MyAccountComponent},
          { path: 'API', component: ApiKeyComponent },
          { path: 'CompanyInfo', component: CompanyInfoComponent },
          { path: 'EmailTemplate', component: EmailTemplateComponent },
          { path: 'Users', component: UsersComponent},
        ] },
        
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
