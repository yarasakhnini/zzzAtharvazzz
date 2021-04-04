export class ProductFillter {
    constructor(
                   
            public  accountId  : number,
            public  vendorId  : number,
            public  unitCost0to500  : boolean,
            public  unitCost501to1000  : boolean,
            public  unitCost1000to5000  : boolean,
            public  unitCostMoreThan5000  : boolean,
            public  quantity0to500  : boolean,
            public  quantity501to1000  : boolean,
            public  quantity1000to5000  : boolean,
            public  quantityMoreThan5000  : boolean,
            public  active  : boolean,
            public  inactive  : boolean
          
          
    )
    
    {}}