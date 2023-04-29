import { User } from "src/app/register/Model/user";
import { IProperty } from "./IProperty";
import { Transaction } from "./ITransaction";

export class Booking {
  id: number
  public check_in_date: Date
 public check_out_date: Date

  constructor(
 
 public price_per_day= 0,
 public price_per_stay= 0,
 public tax_paid=0 ,
 public site_fees=0,
 public effective_amount=0 
 ){}
  }