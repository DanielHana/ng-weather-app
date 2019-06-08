import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';
import { Container } from 'src/app/models/container';
import { ToastService } from './toast.service';
import { WeatherList } from 'src/app/models/weather-list';
import { Forecast } from 'src/app/models/forecast';
import { DisplayService } from './display.service';


@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {

  sub: Subscription;
  newCity: Container;
  forecast: Forecast[];
  newWeath: WeatherList;
  readyOne: boolean;
  readyTwo: boolean;

  constructor(private aService: ApiService, private tService: ToastService, private disService: DisplayService) { }

  getData(city) {
    this.sub = this.aService.getURL(city).subscribe(
      x => {
        this.newCity = x;
        this.tService.showSuccess('City Added!');
        this.readyOne = true;
        this.appendList();
      }, error => {
        this.tService.showError('City Not Found');
      }
    );
    this.sub = this.aService.getForecast(city).subscribe(
      x => {
        this.forecast = x.list;
        this.readyTwo = true;
        this.appendList();
      }, error => {
        console.log(error);
      }
    );
  }

  appendList() {
    if (this.readyOne && this.readyTwo) {
      this.newWeath = {
        daily: this.newCity,
        forecast: this.forecast
      };
      this.disService.addInfo(this.newWeath);
      this.readyOne = false;
      this.readyTwo = false;
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
