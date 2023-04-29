import { Component, Input, OnInit } from '@angular/core';
import { PropertyReview } from 'src/app/shared/Models/IPropertyReview';
import { PropertyReviewContainer } from 'src/app/shared/Models/IProrertyReviewPosting';
import { User } from 'src/app/shared/Models/IUser';
import { PropertyReviewPosting } from '../../Models/PropertyReviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input()Reviews :PropertyReview[] ;

  @Input()UserDetail :User[] ;
  val:number = 5;


  reviewPost:PropertyReviewContainer;







  constructor() {
    this.reviewPost=new PropertyReviewContainer(0,null);
    this.reviewPost.PropertyReviewsDto=new PropertyReviewPosting();
   }

  ngOnInit(): void {
  }

}
