import { PropertyReviewPosting } from "src/app/explore/Models/PropertyReviews";

export class PropertyReviewContainer
{

    constructor( public PropertyId:number,public PropertyReviewsDto:PropertyReviewPosting) {}
}