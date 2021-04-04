import { ResetlinkComponent } from './auth/resetlink/resetlink.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SecureComponent } from './layouts/secure/secure.component';
import { HeaderComponent } from './inc/header/header.component';
import { LoginComponent, WrongLoginComponent } from './auth/login/login.component';
import { UsersComponent,DeactiveUsers } from './setings/UsersPage/users/users.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorModaleComponent } from './Vendor-pages/modale/vendor-modale.component';
import { VendorComponent } from './Vendor-pages/vendor/vendor.component';
import { VfilterComponent } from './Vendor-pages/vfilter/vfilter.component';
import { AddModaleComponent } from './main/inventoryPage/add-modale/add-modale.component';
import { InventoryComponent } from './main/inventoryPage/inventory/inventory.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { RowrecordComponent } from './Vendor-pages/rowrecord/rowrecord.component';
import { RowRecordComponent } from './main/inventoryPage/row-record/row-record.component';
import { InventoryFiltterComponent } from './main/inventoryPage/inventory-filtter/inventory-filtter.component';
import { PurchaseComponent } from './main/PO/purchase/purchase.component';
import { NewPurchaseOrderComponent } from './main/PO/new-purchase-order/new-purchase-order.component';
import { PoFilterComponent } from './main/PO/po-filter/po-filter.component';
import { ApiKeyComponent } from './setings/api-key/api-key.component';
import { CompanyInfoComponent } from './setings/CompanyInformation/company-info/company-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddOrderComponent } from './main/PO/add-order/add-order.component';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ToastrModule } from 'ngx-toastr';
import { SelectVendorsComponent } from './main/PO/select-vendors/select-vendors.component';
import { CreataccountComponent } from './auth/creataccount/creataccount.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EmailTemplateComponent } from './setings/EmaileTemplate/email-template/email-template.component';
import { AddEmailComponent } from './setings/EmaileTemplate/add-email/add-email.component';
import { AddPaymentMethodComponent, AddShipingMethodComponent } from './setings/CompanyInformation/add-method/add-method.component';
import { AddUsersComponent } from './setings/UsersPage/add-users/add-users.component';
import { UpdatevendorComponent } from './Vendor-pages/updatevendor/updatevendor.component';
import { UpdateProductComponent } from './main/inventoryPage/update-product/update-product.component';
import { EmailTempleteRecordComponent } from './setings/EmaileTemplate/email-templete-record/email-templete-record.component';
import { POrecordComponent } from './main/PO/porecord/porecord.component';
import { UpdatePoComponent } from './main/PO/update-po/update-po.component';



@NgModule({
  declarations: [
    WrongLoginComponent,
    DeactiveUsers,
    AddOrderComponent,
    CreataccountComponent,
    AppComponent,
    SecureComponent,
    HeaderComponent,
    LoginComponent,
    PurchaseComponent,
    UsersComponent,
    VendorComponent,
    ForgetComponent,
    ResetlinkComponent,
    VfilterComponent,
    VendorModaleComponent,
    AddModaleComponent ,
    InventoryComponent,
    NewPurchaseOrderComponent,
    RowrecordComponent,
    RowRecordComponent,
    InventoryFiltterComponent,
    PoFilterComponent,
    ApiKeyComponent,
    CompanyInfoComponent,
    AddOrderComponent,
    SelectVendorsComponent,
    MyAccountComponent,
    EmailTemplateComponent,
    AddEmailComponent,
    AddPaymentMethodComponent,
    AddShipingMethodComponent,
    AddUsersComponent,
    UpdatevendorComponent,
    UpdateProductComponent,
    EmailTempleteRecordComponent,
    POrecordComponent,
    UpdatePoComponent,

   
  ],
  imports: [

    ToastrModule.forRoot(),
    ToastrModule,
    ScrollViewModule,
    ReactiveFormsModule,
    MatTableExporterModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatBadgeModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatCheckboxModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[VendorModaleComponent , RowrecordComponent ,RowRecordComponent]
})
export class AppModule { } 
