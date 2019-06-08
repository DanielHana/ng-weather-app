import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DisplayService } from 'src/app/shared/services/display.service';
import { Container } from 'src/app/models/container';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  city = '';
  currentCity: Container = {
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0
    },
    name: 'Add a City',
    sys: {
      id: 0
    }
  };
  symbol = 'sun';
  display = false;
  constructor( private disService: DisplayService) { }
  public subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.disService.displayCities$.subscribe(x => {
      this.currentCity = x.daily;
      if (this.currentCity.main.temp > 49) {
        this.symbol = 'sun';
      } else {
        this.symbol = 'moon';
      }
    });
  }

  scroll(direction: number) {
    this.disService.scroll(direction);
  }

  removeCity() {
    this.disService.removeCity();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
