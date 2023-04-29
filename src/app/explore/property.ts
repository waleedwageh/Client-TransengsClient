import { decimalDigest } from "@angular/compiler/src/i18n/digest";
import { Byte } from "@angular/compiler/src/util";
import { SystemJsNgModuleLoader } from "@angular/core";
import { publish } from "rxjs/operators";

export class Property {
    constructor(
        public id :number,
        public  name :string ,
        public  description:string ,
        public address :string  ,
        public latitude :string ,
        public  logitude :string ,
        public  bedroom_count :number,
        public  bed_count :number ,
        public  bathroom_count :number,
        public  accomodates_count :number ,
        public  availability_tybe :Byte ,
        public  start_date :Date,
        public end_date : Date ,
        public  price :number,
        public price_tybe :Byte ,
        public  minimum_stay :number ,
        public  minimum_stay_tybe :Byte ,
        public refund_tybe : Byte,
        public   CityName :string,
        public   countryName :string ,
        public   currencyName :string ,
        public   propertybeName :string ,
        public   stateName :string

    ){}
}
