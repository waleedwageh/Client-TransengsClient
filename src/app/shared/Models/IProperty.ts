import { Booking } from "./IBooking";
import { PropertyAmenity } from "./IPropertyAmenity";
import { PropertyImage } from "./IPropertyImage";
import { PropertyReview } from "./IPropertyReview";
import { Transaction } from "./ITransaction";
import { User } from "./IUser";

export interface IProperty {
  id: number
  name: string
  description: string
  address: string
  latitude: string
  logitude: string
  bedroom_count: number
  bed_count: number
  bathroom_count: number
  accomodates_count: number
  availability_tybe: number
  start_date: string
  end_date: string
  price: number
  price_tybe: number
  minimum_stay: number
  minimum_stay_tybe: number
  refund_tybe: number
  cityName: string
  countryName: string
  currencyName: string
  propertybeName: string
  stateName: string


  }
