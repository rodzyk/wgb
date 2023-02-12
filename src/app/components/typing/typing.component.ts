import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypingComponent implements OnInit {
  async ngOnInit() {
    this.typedText = this.textArray[0];
    for (let i = 1; i < this.textArray.length; i++) {
      const str = this.textArray[i];
      await this.typeAndEraceString(str)
    }
  }

  @Input() staticText: string = "";
  @Input() textArray: string[] = [];

  @Input() typingDelay = 200;
  @Input() erasingDelay = 100;
  @Input() newTextDelay = 2000;

  public typedText: string = "";

  @HostBinding('class.typing') typingClass = false;

  constructor(private cd: ChangeDetectorRef) { }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async typeLetter(letter: string) {
    this.typedText += letter;
    this.cd.detectChanges();
    await this.sleep(this.typingDelay)
  }

  async eraseOne() {
    this.typedText = this.typedText.slice(0, -1);
    this.cd.detectChanges();
    await this.sleep(this.erasingDelay)
  }

  async typeAndEraceString(str: string) {
    await this.sleep(this.newTextDelay);

    while (this.typedText.length > 0) {
      await this.eraseOne();
    }

    const array = Array.from(str);
    for (let i = 0; i < array.length; i++) {
      const ch = array[i];
      await this.typeLetter(ch);
    }
  }
}
