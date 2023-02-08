import { Injectable } from '@angular/core';
import { Episode } from '../models';
import { TickTack } from '../models/tick-tack';
import { DateCaclService } from './date-cacl.service';
import { EpisodeService } from './episode.service';

@Injectable({
  providedIn: 'root'
})
export class CalcWaitingService {
  ticktack: TickTack = new TickTack();

  released: Episode | undefined = undefined;
  waiting: Episode | undefined = undefined;

  constructor(public episode: EpisodeService, private dateCalc: DateCaclService) { }

  init(list: Episode[]) {
    this.released = this.episode.getLastReleased(list);
    this.waiting = this.episode.getPlanned(list);

    if (!this.released || !this.waiting) return;

    this.calc(this.waiting as Episode, this.released as Episode);
    this.ticktack.tick.subscribe(() => {

      this.calc(this.waiting as Episode, this.released as Episode);
    })

  }

  start() {
    this.ticktack.start();
  }

  calc(waiting: Episode, released: Episode) {
    waiting.date = new Date()
    waiting.time = this.dateCalc.calcDifferenceDate(released.date as Date, waiting.date);
  }
}
