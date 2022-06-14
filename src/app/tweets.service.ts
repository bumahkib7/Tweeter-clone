import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  public API = '//localhost:8080';
  public TWEETS_API = this.API + '/tweets';
  private  authService;


  constructor(private http: HttpClient, authService: AuthService) {
    this.authService = authService;
  }


  getAll(): Observable<any> {
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get(this.TWEETS_API, {headers: headers});
  }

  save(tweet: any): Observable<any> {
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    let result : Observable<any>;
    result = this.http.post(this.TWEETS_API, tweet, {headers: headers});
    return result;
  }

  update(tweet: any): Observable<any> {
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    let result : Observable<any>;
    result = this.http.put(this.TWEETS_API + '/' + tweet.id, tweet, {headers: headers});
    return result;
  }

  delete(id: string): Observable<any> {
    let headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken());
    let result : Observable<any>;
    result = this.http.delete(this.TWEETS_API + '/' + id, {headers: headers});
    return result;
  }
}
