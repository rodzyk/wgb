import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.scss']
})
export class DataSetComponent {
  @Input() value: string = 'value';
  @Input() type: string = 'value';
}
