import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountOfTime, Episode } from '../models';
import { DateCaclService } from './date-cacl.service';

const ZN_EPISODES_LINK = `https://gist.githubusercontent.com/rodzyk/20d46049d685eb0d6f84ea521205c0c5/raw/gb-zn.json`;

type EpisodeGroup = {
  id: number | string | null,
  items: Episode[]
}

type Avarage = {
  total: number,
  count: number
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
        time: (date && prevDate) ? this.dateCalc.calcDifferenceDate(date, prevDate) : new CountOfTime(),
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

  averageAllTime(episodes: Episode[]): CountOfTime {
    const averageTotalTime = episodes.reduce(
      (t: Avarage, n: Episode) => {
        return (n.time.total > 0) ? { total: t.total + n.time.total, count: t.count + 1 } : t
      }, { total: 0, count: 0 })

    return new CountOfTime(averageTotalTime.total / averageTotalTime.count);
  }

  maxTime(episodes: Episode[]): CountOfTime {
    const max = episodes.reduce((total, next: Episode) => next.time.total > total ? next.time.total : total, 0);
    return new CountOfTime(max)
  }

  getPlanned(episodes: Episode[]) {
    return episodes.find((v: Episode) => v.status === 'waiting')
  }

  getLastReleased(episodes: Episode[]) {

    return episodes.find((v: Episode) => v.status === 'released')
  }

  get(): Observable<Episode[]> { return this.http.get<Episode[]>(ZN_EPISODES_LINK) }
}
