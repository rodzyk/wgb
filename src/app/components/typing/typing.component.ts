import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {
  ngOnInit(): void {
    this.type()
  }

  @Input() staticText: string = "";
  @Input() textArray: string[] = [];

  @Input() typingDelay = 200;
  @Input() erasingDelay = 100;
  @Input() newTextDelay = 2000; // Delay between current and next text

  public typedText: string = "";
  private _textArrayIndex = 0;
  private _charIndex = 0;

  @HostBinding('class.typing') typingClass = false;

  type() {
    if (!this.textArray) return;

    if (this._charIndex < this.textArray[this._textArrayIndex].length) {

      if (!this.typingClass) this.typingClass = true;

      this.typedText += this.textArray[this._textArrayIndex].charAt(this._charIndex);
      this._charIndex++;

      setTimeout(() => { this.type() }, this.typingDelay);
    }
    else {
      this.typingClass = false;
      setTimeout(() => { this.erase() }, this.newTextDelay);
    }
  }

  erase() {
    if (this._charIndex > 0) {

      if (!this.typingClass) this.typingClass = true;

      this.typedText = this.textArray[this._textArrayIndex].substring(0, this._charIndex - 1);

      this._charIndex--;

      setTimeout(() => { this.erase() }, this.erasingDelay);
    }
    else {
      this.typingClass = false;
      this._textArrayIndex++;
      if (this._textArrayIndex >= this.textArray.length) this._textArrayIndex = 0;
      setTimeout(() => { this.type() }, this.typingDelay);
    }
  }
}
