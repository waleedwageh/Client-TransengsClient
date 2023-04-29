import { PropertyImage } from "src/app/shared/Models/IPropertyImage";

export class PropertyImagePost implements PropertyImage{
    id: number;
    image: string;
    property_id: number;
}