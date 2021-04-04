import { Vendor } from "../services/VendorName.service";

export class ParchaseOrder {
    constructor(
  
        public vendorId: number,
        public accountId: number,
        public shippingAddress1: string,
        public shippingAddress2: string,
        public shippingCity: string,
        public shippingCountry: string,
        public shippingStatus: string,
        public shippingZipCode: number,
        public notesToVendor: string,
        public subCost: number,
        public tax: number,
        public totalCost: number,
        ){}}
        
