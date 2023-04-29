import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProperityType } from '../../properity-type';


@Injectable({
  providedIn: 'root'
})
export class ProperityTypeService {
  BaseUrl = environment.ApiUrl;

  constructor(public http: HttpClient) { }
 

  GetPropType()
  {  
    let params = new HttpParams();
  
    return this.http.get<ProperityType[]>(`${this.BaseUrl}/property_tybe`
    , { observe: 'response', params })
    .pipe(map(res => {
      return res.body
    }));
  }

}
