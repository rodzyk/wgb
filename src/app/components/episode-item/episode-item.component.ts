import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Episode } from 'src/app/models';

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeItemComponent {
  @Input() episode: Episode | null = null;
}
