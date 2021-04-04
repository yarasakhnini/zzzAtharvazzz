export class PurchaseOrderFillter {
    constructor(
                   
            public  accountId  : number,
            public  vendorId  : number,
            public  canceled  : boolean,
            public  submittedToVendor  : boolean,
            public  emailed  : boolean,
            public  awaitingReceipt  : boolean,
            public  closed  : boolean,
            public  receiving  : boolean,
            public  duplicated  : boolean,
            public  fromDate  : Date,
            public  toDate  : Date,          
          
    )
    
    {}
}

