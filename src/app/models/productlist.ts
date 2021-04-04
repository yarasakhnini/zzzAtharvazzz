
export class ProductList {
    constructor(
  
        public accountId: number,
        public products: [
            {
             vendorName:string
             sku: string,///
             productName: string,//
             unitCost: number,
             productLeadTime: number,//
             upcNumber:number,///
             binNumber:number,///
             isFBADirect:string,//
             fnsku : string,//
             mpn : number,//
             asin : string, //
             status:string,//
             isFBA:string,//
             caseHeight:number,
             caseWidth:number,
             caseLength:number,
             caseWeight:number,
             caseUnitQuantity:number,
             itemHeight:number,
             itemWidth:number,
             itemLength:number,
             itemWeight:number,
             unitWeight:number,
             unitHeight:number,
             unitLength:number,
             unitWidth:number,
             overSizeItem:string,
             costPerUnit :number,
             avalibaleQuantity:number,
            miamiWarehouseBin:string,
            accountId:number
            }
        ]

        
    ) { }
}