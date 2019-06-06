import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  week: any = [
    'sun',
    'sun',
    'moon',
    'moon',
    'sun'
  ];

  constructor() { }

  ngOnInit() {
  }

}
