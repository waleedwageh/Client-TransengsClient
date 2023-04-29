import { Booking } from "./IBooking";
import { PaymentDto } from "./IPaymentDto";
import { Transaction } from "./ITransaction";

export class PaymentPostingContainer {
    propertyId: number
    paymentDto: PaymentDto 
    bookingDTO: Booking
    transactionDto: Transaction
  }