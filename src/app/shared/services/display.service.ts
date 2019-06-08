import { Injectable } from '@angular/core';
import { WeatherList } from 'src/app/models/weather-list';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  defaultCity: WeatherList = {
    daily: {
      main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0
      },
      name: 'Add a City',
      sys: {
        id: 0
      }
    },
    forecast: []
  };

  weathList: WeatherList[] = [];
  displayCities$  = new Subject<any>();
  count = 0;

  constructor() { }

  addInfo(info: WeatherList) {
    this.weathList.push(info);
    info.daily.main.temp_max = Math.round(info.daily.main.temp_max);
    info.daily.main.temp_min = Math.round(info.daily.main.temp_min);
    this.displayCities$.next(this.weathList[this.count]);
  }

  scroll(direction: number) {
    if (this.weathList[this.count + direction]) {
      this.count += direction;
      this.displayCities$.next(this.weathList[this.count]);
    }
  }

  removeCity() {
    this.weathList.splice(this.count, 1);
    this.count = 0;
    if (this.weathList[0]) {
      this.displayCities$.next(this.weathList[this.count]);
    } else {
      this.displayCities$.next(this.defaultCity);
    }
  }
}
