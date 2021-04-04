import { PaymentMethod } from './payment-method';

export class Vendorinformation {
    constructor(
  
       public  id : number,
       public  vendorName :  string ,
       public  website : string ,
       public  leadTime : number,
       public  paymentMethod : PaymentMethod,
       public  shippingAddress1 :  string ,
       public  shippingAddress2 :  string ,
       public  shippingCity :  string ,
       public  shippingState :  string ,
       public  shippingCountry :  string ,
       public  shippingZip : number
        
    ) { }
}