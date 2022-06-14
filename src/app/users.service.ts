import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// @ts-ignore
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public API = '//localhost:8080';
  public USERS_API = this.API + '/users';

  constructor(public http: HttpClient, private authService: AuthService) { }

  getByScreenName(screenName: string): Observable<any> {
    const apiLink = this.USERS_API + '/' + screenName;
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(apiLink, {headers: headers});
  }


  follow(userId: number): Observable<any> {
    const apiLink = this.USERS_API + '/' + userId + '/follow';
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post(apiLink, {}, {headers: headers});
  }
}
