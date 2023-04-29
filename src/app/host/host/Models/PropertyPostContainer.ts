import { IProperty } from "../../../shared/Models/IProperty";
import { IStatePost } from "../../../shared/Models/IState";
import { AmenityPost } from "./Amenity";
import { ImagePost } from "./Images";

export class PropertyPostContainer {
    propertydto: IProperty
    propertyImages: ImagePost[]
    amenities: AmenityPost[]
    state: IStatePost

}
