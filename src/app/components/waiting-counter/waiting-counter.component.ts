import { Component, Input } from '@angular/core';
import { CountOfTime } from 'src/app/models';

@Component({
  selector: 'app-waiting-counter',
  templateUrl: './waiting-counter.component.html',
  styleUrls: ['./waiting-counter.component.scss']
})
export class WaitingCounterComponent {
  @Input() countOfTime: CountOfTime = { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
}
