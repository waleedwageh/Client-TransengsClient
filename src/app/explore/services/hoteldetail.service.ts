import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyReview } from 'src/app/shared/Models/IPropertyReview';
import { PaymentPostingContainer } from 'src/app/shared/Models/PaymentPostingContainer';
import { PropertyDetilesRoot } from 'src/app/shared/Models/PropertyDetilesRoot';
import { environment } from 'src/environments/environment';
import { Hoteldetail } from '../Models/hoteldetail';
import { Property } from '../property';

@Injectable({
  providedIn: 'root'
})
export class HoteldetailService {
  private baseUrl:string = environment.ApiUrl
  constructor(public http:HttpClient) { }

  GetAllPropertyDetail() {

    return this.http.get<Hoteldetail[]>(this.baseUrl+"/"+Property);

  }
  GetPropertyDetail(id:number){
    return this.http.get<PropertyDetilesRoot>(`${this.baseUrl}/property/${id}`);
  }
  GetAllPropertyReviews() {

    return this.http.get<PropertyReview[]>(this.baseUrl+"/"+Property);
  }
  PostPayment(model:PaymentPostingContainer){
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.post<PaymentPostingContainer>(`${this.baseUrl}/Reservation`,model,{headers});
  }







  // getReservations(args: ChangeReservationArg): Observable<object> {
  //   const res = new ReservationDto();

  //   let list1 = this.getAllRoom();
  //   if (args.roomtype !== 0) {
  //     list1 = list1.filter(l => l.roomType === args.roomtype);
  //   }
  //   res.rooms  = list1;

  //   let list2 = this.getAllBooking();
  //   if (args.roomtype !== 0) {
  //     list2 = list2.filter(l => l.roomType === args.roomtype);
  //   }
  //   res.bookings = list2;

  //   return of(res);
  // }









}
