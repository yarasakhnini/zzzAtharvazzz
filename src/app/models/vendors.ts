import { ParchaseOrder } from './PurchaseModel';
import { purchaseOrder } from './purchaseOrder';

export class Vendors {
constructor(

public vendorName: string,
public vendorCode:string,
public website: string,
public leadTime:number,
public paymentMethodId:number,
public shippingMethodId: number,
public emailTemplateId:number,//
public shippingAddress1:string,
public shippingAddress2:string,
public shippingCity:string,
public shippingState:string,
public shippingCountry:string,
public shippingZip:number,
public contactFirstName:string,
public contactLastName:string,
public emailAddress:string,//
public praimaryPhoneNumber:string,
public secondryPhoneNumber:string,
public faxNumber:string,
public billingAddress1:string,
public billingAddress2:string,
public billingCity:string,
public billingState:string,
public billingCountry:string,
public accountId:number,

//public purchaseOrder: ParchaseOrder
 )
 
 {} 
}
