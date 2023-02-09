import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models';
import { DateCaclService } from './date-cacl.service';

type EpisodeGroup = {
  id: number | string | null,
  items: Episode[]
}

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  episodesByYear: EpisodeGroup[] = [];

  constructor(private dateCalc: DateCaclService, private http: HttpClient) { }

  initEpisodes(data: Episode[]): Promise<Episode[]> {
    let episodes: Episode[] = [];

    data.forEach((e, i) => {

      const date: Date | null = (e.date != null) ? new Date(e.date) : null

      let prevDate = null;

      if (data[i + 1]) {
        const prev: Episode = data[i + 1];

        prevDate = (prev.date != null) ? new Date(prev.date) : null
      }

      episodes.push({
        title: e.title,
        links: e.links,
        date: date,
        chapter: e.chapter,
        part: e.part,
        status: (date) ? 'released' : 'waiting',
        time: (date && prevDate) ? this.dateCalc.calcDifferenceDate(date, prevDate) : {days: 0, hours: 0, minutes: 0, seconds:0, total: 0},
        extra: e.extra ?? false
      });
    });

    return new Promise<Episode[]>((resolve, reject) => {
      resolve(episodes)
    })
  }

  groupByYear(episodes: Episode[]): Promise<EpisodeGroup[]> {

    let list: EpisodeGroup[] = [];

    episodes.forEach((e) => {
      const year = (e.date) ? e.date.getFullYear() : "Waiting";
      let group: EpisodeGroup | undefined = list.find(v => v.id === year)

      if (!group) {
        const g: EpisodeGroup = { id: year, items: [] };
        group = g;
        list.push(g);
      }
      group.items.push(e)
    })

    return new Promise<EpisodeGroup[]>((resolve, reject) => {
      resolve(list)
    })
  }

  getPlanned(episodes: Episode[]) {
    return episodes.find((v: Episode) => v.status === 'waiting')
  }

  getLastReleased(episodes: Episode[]) {

    // const released: Episode[] = episodes.filter(v=> v.status === 'released')

    return episodes.find((v: Episode) => v.status === 'released')
  }

  get(): Observable<Episode[]> { return this.http.get<Episode[]>('assets/gb-zn.json') }
}
