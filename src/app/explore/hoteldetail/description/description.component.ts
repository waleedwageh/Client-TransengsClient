import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HotelsComponent } from 'src/app/home/Components/hotels/hotels.component';
import { Booking } from 'src/app/shared/Models/IBooking';
import { PaymentDto } from 'src/app/shared/Models/IPaymentDto';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { Transaction } from 'src/app/shared/Models/ITransaction';
import { PaymentPostingContainer } from 'src/app/shared/Models/PaymentPostingContainer';
import { PropertyDetilesRoot } from 'src/app/shared/Models/PropertyDetilesRoot';
import { Hoteldetail } from '../../Models/hoteldetail';
import { HoteldetailService } from '../../services/hoteldetail.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  // hotelDetail = new Hoteldetail();
  @Input() hotelDetail :IProperty;
  check_in_date:Date;
  check_out_date:Date;

  
  
  
  NumberofGuest: number;
  prop:IProperty ;
 
paymentPost :PaymentPostingContainer ;


    constructor(public ar:ActivatedRoute,public hoteldetailser:HoteldetailService ,public route: Router,private toastr:ToastrService  ) {
   this.paymentPost= new PaymentPostingContainer();
   this.paymentPost.bookingDTO=new Booking();
   this.paymentPost.transactionDto=new Transaction();
   this.paymentPost.paymentDto=new PaymentDto();

   }
   ngOnInit(): void {

  }
  Order()
  {
    console.log(this.paymentPost);
   this.OnPost();
   console.log("sucss");
  
  }



OnPost()
{
  this.CalculateBooking();
  this.CalculateTransaction();
  this.paymentPost.paymentDto.amount=parseInt(this.paymentPost.bookingDTO.effective_amount.toString())*1000;
  this.paymentPost.paymentDto.description=this.hotelDetail.description;
  this.paymentPost.propertyId=this.hotelDetail.id;
  this.hoteldetailser.PostPayment(this.paymentPost).subscribe(res=>{
    this.toastr.success("Successiful Payment");
    // this.toastr.success( (this.paymentPost.paymentDto.amount/100).toString());
  })


}

CalculateBooking(){
  let priceperday = this.hotelDetail.price;
  let priceperstay = priceperday*((this.check_out_date.getDate()-this.check_in_date.getDate())/24)*this.NumberofGuest;
  let taxpaid = priceperstay*.05;
  let site_fees = priceperstay*.15;
  let effective_amount = priceperstay*.8;
  this.paymentPost.bookingDTO=new Booking(priceperday ,priceperstay,taxpaid,site_fees,effective_amount) ;
}

CalculateTransaction()
{
  let priceperday = this.hotelDetail.price;
  let priceperstay = priceperday*((this.check_out_date.getDate()-this.check_in_date.getDate())/24)*this.NumberofGuest;
  let sitefees = priceperstay*.15;
  let amount =priceperstay*.8 ;
  this.paymentPost.transactionDto=new Transaction(sitefees,amount) ;
}




}
