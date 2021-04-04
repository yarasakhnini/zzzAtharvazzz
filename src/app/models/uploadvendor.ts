import { Vendors } from "./vendors";

export class VendorList {
    constructor(
        public accountId:number,
        public vendors: Array<Vendors>) { }
}