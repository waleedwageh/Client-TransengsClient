import { PropertyReview } from "src/app/shared/Models/IPropertyReview";

export class PropertyReviewPosting implements PropertyReview
{
    id: number;
    comment: string;
    rating: number;
    created: Date;
    moidfied: any;
    status: number;
    booking_id: number;
    image: string;
    userName: string;

}