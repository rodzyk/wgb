import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-parchment',
  template: '<ng-content />',
  styleUrls: ['./parchment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParchmentComponent {
  @Input() worn: boolean = false;
  @Input() roughpaper: boolean = false;

  @Input() wornId: string = "worn";
  @Input() roughpaperId: string = "roughpaper";

  @HostBinding('style.--filters')
  public get filter(): string {
    const wornURL = this.worn ? `url("#${this.wornId}")` : '';
    const roughpaperURL = this.roughpaper ? `url("#${this.roughpaperId}")` : '';
    return [wornURL, roughpaperURL].join(' ');
  };

}
