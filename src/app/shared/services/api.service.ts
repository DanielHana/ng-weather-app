import { Injectable, OnDestroy } from '@angular/core';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { Container } from 'src/app/models/container';
import { TempInfo } from 'src/app/models/temp-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnDestroy{

  apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  apiKey = '&units=imperial&appid=7368cd9c634c86465f0c6542a47a6054';
  sub: Subscription;
  cInfo: Container;
  wInfo: TempInfo;

  constructor(private http: HttpClient, private tService: ToastService) { }

  public makeCall(city) {
    this.sub = this.getURL(this.apiURL + city + this.apiKey).subscribe(
      x => {
        this.cInfo = x;
        this.wInfo = this.cInfo.main;
      }
    );
    return this.wInfo;
  }

  getForecast() {

  }

  getURL(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
