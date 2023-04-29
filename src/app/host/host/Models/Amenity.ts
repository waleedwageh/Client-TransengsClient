import { Amenity } from "src/app/shared/Models/AmenitiesDTO";

export class AmenityPost implements Amenity
{
    id: number;
    name: string;
    icon_image: string;
    
}