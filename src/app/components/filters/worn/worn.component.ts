import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fx-worn',
  templateUrl: './worn.component.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WornComponent {
  @Input() seed: number = 5;
  @Input() scale: number = 50;
  @Input() id: string = "worn";
}
