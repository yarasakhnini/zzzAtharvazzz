export class VendorFillter {
    constructor(
        
           public  leadTime_1to2Days:boolean ,
           public  leadTime_3to5Days :  boolean,
           public  leadTime_moreThan5Days :  boolean,
           public  creditCard :  boolean,
           public  check :  boolean,
           public  achTransfer :  boolean,
           public  accountId : number
          
    )
    
    {}}