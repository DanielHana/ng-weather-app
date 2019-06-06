import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './shared/components/btn/btn.component';
import { CityComponent } from './shared/components/city/city.component';
import { HomeComponent } from './views/pages/home/home.component';
import { SearchComponent } from './views/pages/search/search.component';
import { ToastComponent } from './views/toast/toast.component';
import {ToastModule} from 'primeng/toast';
import { ForecastComponent } from './views/forecast/forecast.component';
import { ArrowComponent } from './shared/components/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    CityComponent,
    HomeComponent,
    SearchComponent,
    ToastComponent,
    ForecastComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
