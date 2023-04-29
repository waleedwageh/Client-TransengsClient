import { IProperty } from "./IProperty";
import {PropertyReview} from "./IPropertyReview" ;
import {PropertyImage} from "./IPropertyImage"
import {Amenity} from "./AmenitiesDTO"



export interface PropertyDetilesRoot
{
  propertyDTo: IProperty
  propertyReviewsDtos: PropertyReview[]
  propertyImagesDtos: PropertyImage[]
  amenitiesDtos: Amenity[]
}
