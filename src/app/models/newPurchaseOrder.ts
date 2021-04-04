import { purchaseOrder } from './purchaseOrder';
import { PaymentMethod } from './payment-method';
import { Product } from "./Inventory";
import { ParchaseOrder } from "./PurchaseModel";
import { Vendor } from '../services/VendorName.service';

export class PurchaseOrderViewModel {
    constructor(
        public id :number,
        public statusStr :string,
        public vendorName: string,
        public vendorCode:string,
        public vendorId:number,
        public website: string,
        public leadTime:number,
        public paymentMethod:string,
        public shippingAddress1:string,
        public shippingAddress2:string,
        public shippingCity:string,
        public shippingState:string,
        public shippingCountry:string,
        public shippingZipCode:number,
        public accountId:number,
        public receivingAddress1:string,
        public receivingAddress2:string,
        public receivingCity:string,
        public receivingState:string,
        public receivingCountry:string,
        public receivingZip:number,
        public notesToVendor: string,
        public subCost: number,
        public tax: number,
        public totalCost: number,
        public products :Array <NewPOModel>,
       
    ){}}


    export interface NewPOModel {
        avalibaleQuantity: number
        productName: string
        sku: string
        unitCost: number
        totalCost: number
        productLeadTime: number

      }
    
      