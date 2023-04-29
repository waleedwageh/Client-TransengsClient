import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private Users: User[];
  BaseUrl = environment.ApiUrl;
  private CurrentUserSubject = new BehaviorSubject<User>(null);
  CurrentUser$ = this.CurrentUserSubject.asObservable();

  loadCurrentUser() {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.BaseUrl}/Account`, { headers })
      .pipe(map((user: User) => {
        if (user) {
          localStorage.setItem('token', user.token);
          console.log('come here');
          this.CurrentUserSubject.next(user);
        }
      }));



  }


  AddNewUser(user: User) {
    return this.http.post<User>(`${this.BaseUrl}/Account/register`, user);

  }

  LoginUser(user: User) {
    return this.http.post<User>(`${this.BaseUrl}/Account/login`, user);
  }


  constructor(private http: HttpClient) { }


}
