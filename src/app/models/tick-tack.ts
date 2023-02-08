import { EventEmitter } from "@angular/core";

export class TickTack {
    private _timer: any | undefined;
  
    public tick: EventEmitter<void> = new EventEmitter<void>();
  
    constructor(public interval: number = 1000) { }
  
    start() {
      this._timer = setInterval(() => { this.tick.emit() }, this.interval);
    }
  
    stop() {
      clearInterval(this._timer)
    }
  }