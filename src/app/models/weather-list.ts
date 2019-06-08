import { Forecast } from './forecast';
import { Container } from './container';

export interface WeatherList {
    forecast: Forecast[];
    daily: Container;
}
