import { PromoCodes } from "./IPromoCodes";
import { User } from "./IUser";

export class Transaction {
  id: number
constructor(
 public site_fees= 0 ,
 public  amount=0 ,
 public  trancfer_on=new Date("1/1/2022"),
  public currency_id=0,
  public promo_code_id=0,
 public discount_amt=0,
//  promo_codes: PromoCodes
 ){}
  }