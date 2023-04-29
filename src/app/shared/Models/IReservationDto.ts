import {Booking} from './IBooking';
import {Transaction} from './ITransaction';
import {PaymentDto} from './IPaymentDto';
import {User} from './IUser';
export interface ReservationDto {
    propertyId: number
    paymentDto: PaymentDto
    user: User
    bookingDTO: Booking
    transactionDto: Transaction
  }