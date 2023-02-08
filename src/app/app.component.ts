import { Component, OnInit } from '@angular/core';
import { Episode } from './models';
import { CalcWaitingService } from './services/calc-waiting.service';
import { EpisodeService } from './services/episode.service';
import { FxService } from './services/fx.service';
import { TypingService } from './services/typing.service';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public episode: EpisodeService,
    public typing: TypingService,
    public calcWait: CalcWaitingService,
    public fx: FxService) { }

  ngOnInit(): void {
    this.episode.get().subscribe(data => {
      this.episodeGetHandler(data);
    })
  }

  async episodeGetHandler(data: Episode[]) {
    const episodes = await this.episode.initEpisodes(data)
    this.episode.episodesByYear = await this.episode.groupByYear(episodes);

    this.calcWait.init(episodes);
    this.calcWait.start();
  }
}
