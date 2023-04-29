import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Amenity } from 'src/app/shared/Models/AmenitiesDTO';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { PropertyPostContainer} from 'src/app/host/host/Models/PropertyPostContainer';
import { PropertyPost} from 'src/app/host/host/Models/PropertyPost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyInsertService {

  constructor(private http: HttpClient) { }

  property: IProperty;
  amenity:Amenity[];
  BaseUrl = environment.ApiUrl;

  postProperty(property: PropertyPostContainer) {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');

   headers = headers.set('Authorization',`Bearer ${token}`)
    return this.http.post<IProperty>(`${this.BaseUrl}/Property`, property,{headers});
  }

  GetAmenity()
  {
    return this.http.get<Amenity[]>(`${this.BaseUrl}/amenities`);
  }



}


// import { Injectable } from '@angular/core';
// import { Properties } from './properties.model';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// @Injectable({
//   providedIn: 'root'
// })
// export class PropertiesService {
//   url: string = "https://localhost:44351/api/property"
//   // private proper:Properties[];
//   // property:Properties;
//   constructor(private http: HttpClient) { }
//   /* getProperties()
//    {
//      this.http.get(this.url).toPromise().then
//      (
//        result=>
//        {
//          this.properties=result as Properties[];
//        }
//      )
//    } */
//   postProperty(property: Properties) {
//     return this.http.post<Properties>(this.url, property);
//   }}
