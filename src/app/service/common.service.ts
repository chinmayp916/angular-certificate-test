import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { SelectedCar } from '../model/SelectedCar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private SelectedCarBehavior = new BehaviorSubject<SelectedCar>(new SelectedCar());
  SelectedCarObservable:Observable<SelectedCar> = this.SelectedCarBehavior.asObservable();
  SelectedCar(SelectedCar: SelectedCar){
    this.SelectedCarBehavior.next(SelectedCar);
  }
}
