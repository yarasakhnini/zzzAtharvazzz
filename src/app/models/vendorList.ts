
export class VendorList {
    constructor(
  
        public AccountId: number,
        public Vendors: [
            {
                vendorName: string,
                vendorCode: string,
                website: string,
                leadTime: 1,
                paymentMethodName: string,
                shippingMethodName: string,
                emailTemplateName: string,
                contactFirstName: string,
                contactLastName: string,
                emailAddress: string,
                praimaryPhoneNumber: string,
                secondryPhoneNumber: string,
                faxNumber: string,
                shippingAddress: string,
                shippingAddress2: string,
                shippingCity: string,
                shippingState: string,
                shippingCountry: string,
                shippingZip: number,
                billingAddress1: string,
                billingAddress2: string,
                billingCity: string,
                billingState: string,
                billingCountry: string,
                status: string
            }
        ]
    ) { }
}