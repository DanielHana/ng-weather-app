import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Forecast } from 'src/app/models/forecast';
import { DisplayService } from 'src/app/shared/services/display.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  currentCity: Forecast[];
  display: Forecast[] = []
  subscription: Subscription;

  constructor(private disService: DisplayService) { }

  ngOnInit() {
    this.subscription = this.disService.displayCities$.subscribe(x => {
      this.display = [];
      this.currentCity = x.forecast;
      for (const i of this.currentCity) {
        i.main.temp = Math.round(i.main.temp);
        const d = new Date(i.dt * 1000);
        const gh = d.getHours();

        // This API is weird, I basically
        // am pulling from certain hours of the next 5 days
        // in the if statement below. I had to pull at certain intervals.
        if (gh > 10 && gh <= 13) {
          i.day = d.getDate();
          i.month = d.getMonth() + 1;
          if (i.main.temp > 49) {
            i.icon = 'sun';
          } else {
            i.icon = 'moon';
          }
          this.display.push(i);
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
