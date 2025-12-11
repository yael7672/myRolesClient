import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpServiceService {

  private kindOfPopUp$: BehaviorSubject<any> = new BehaviorSubject(null);
  private navBar$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isPopUpOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isSpinner$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private WeatherForecast$ = new ReplaySubject<number>(); 

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  setSpecificPopUp(data: boolean, type: string) {
    var obj = {
      addWeatherForecast: type === 'addWeatherForecast' ? data : false,
      updateWeatherForecast: type === 'updateWeatherForecast' ? data : false,
      deleteWeatherForecast: type === 'deleteWeatherForecast' ? data : false,

    }
    this.setKindOfPopUp(obj)
  }
  setKindOfPopUp(data: any) {
    this.kindOfPopUp$.next(data)
  }

  getKindOfPopUp() {
    return this.kindOfPopUp$;
  }


  setWeatherForecast(data: any) {
    this.WeatherForecast$.next(data)
  }

  getWeatherForecast() {
    return this.WeatherForecast$;
  }

  setClosePopUp() {
    this.kindOfPopUp$.next(false)
  }
  setIsPopUpOpen(event: boolean) {
    this.isPopUpOpen$.next(event);
  }
  getIsPopUpOpen() {
    return this.isPopUpOpen$;
  }
  
  setNavBar(val: boolean) {
    this.navBar$.next(val)
  }
  getNavBar() {
    return this.navBar$;
  }
  setSpinner(val:boolean) {
    this.isSpinner$.next(val);
  }
  getSpinner() {
    return this.isSpinner$;
  }
}
