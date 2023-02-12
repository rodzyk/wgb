import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'copy-year',
  templateUrl: './copy-year.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyYearComponent {
  @Input() since: number = (new Date()).getFullYear();

  year: number = (new Date()).getFullYear();
}
