import { DateTime } from "luxon";

export class stock {
    constructor(public price : number|undefined, public stockDate : DateTime|undefined){  }
}