import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotivationalQuotesService {

  private zenQuotesUrl = 'https://zenquotes.io/api/random';

  constructor(private http: HttpClient) { }

  getMotivationalQuote(): Observable<any> {
    return this.http.get<any>(this.zenQuotesUrl);
  }
}
