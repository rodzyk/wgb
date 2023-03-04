import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Episode } from 'src/app/models';

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeItemComponent {
  private readonly interval = 30000; // 30 sec
  
  @Input() episode: Episode | null = null;
  @Input() isNew: boolean = false;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      ref.detectChanges();
    }, this.interval)
  }
}
