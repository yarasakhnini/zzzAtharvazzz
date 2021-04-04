
export class productPurshaceOrderlist {
    constructor(

      public  purchaseOrderId: number,
      public    accountId: number,
        public products: [
            {
     
                sku: string;
                productName: string,
                unitCost  : number,
                totalCost  : number,
                avalibaleQuantity  : number,
                productLeadTime: number
           
            }
        ]

        
    ) { }
}