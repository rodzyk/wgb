import { Injectable } from '@angular/core';
import { CountOfTime } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DateCaclService {

  constructor() { }

  calcDifferenceDate(from: Date, to: Date): CountOfTime {

    const total = Math.abs(to.valueOf() - from.valueOf());

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total, days, hours, minutes, seconds
    };
  }
}
