import { Component, OnInit } from '@angular/core';
import {ICurrentWeather} from '../icurrent-weather';
import { WeatherService } from '../weather/weather.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather
  constructor(private weatherService: WeatherService) { 

  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Bethesda','USA').subscribe(data => this.current = data);
  }

}
