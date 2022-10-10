import { DateTime } from "luxon";

export class stock {
    constructor(
        public stockPrice : number|undefined,
         public companyCode : string|undefined, 
         public stockDate : DateTime|undefined){  }
}