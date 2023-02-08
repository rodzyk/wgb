import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FxService {

  scale = 80;
  smallScale = 30;
  seed = 1;

  constructor() { 
    this.scale = this.getRandomArbitrary(40, 80);
    this.smallScale = this.getRandomArbitrary(16, 24);
    this.seed = this.getRandomArbitrary(2, 8);
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
