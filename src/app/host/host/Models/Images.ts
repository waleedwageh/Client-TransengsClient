import { PropertyImage } from "src/app/shared/Models/IPropertyImage";

export class ImagePost implements PropertyImage {


    constructor(
        public id = 0,
        public property_id = 0,
        public image=""

    ) { }

}