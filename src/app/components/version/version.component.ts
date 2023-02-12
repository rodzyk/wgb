import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersionComponent {
  @Input() v: string = "1.0";
  @Input() appName: string = "App name";
}
