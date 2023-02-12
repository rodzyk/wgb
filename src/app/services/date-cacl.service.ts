import { Injectable } from '@angular/core';
import { CountOfTime } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DateCaclService {

  constructor() { }

  calcDifferenceDate(from: Date, to: Date): CountOfTime {

    const total = Math.abs(to.valueOf() - from.valueOf());

    return new CountOfTime(total);
  }
}
