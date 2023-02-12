import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FxService {
  _isRoughpaper: boolean = true;
  _isWorn: boolean = true;


  public set isWorn(v: boolean) {
    this.storage.set<boolean>('isWorn', v);
    this._isWorn = v;
  }
  public get isWorn(): boolean {
    return this._isWorn;
  }

  public set isRoughpaper(v: boolean) {
    this.storage.set<boolean>('isRoughpaper', v);
    this._isRoughpaper = v;
  }
  public get isRoughpaper(): boolean {
    return this._isRoughpaper;
  }

  init() {
    this.isWorn = this.storage.get<boolean>('isWorn') ?? true;
    this.isRoughpaper = this.storage.get<boolean>('isRoughpaper') ?? true;
  }

  scale = 80;
  smallScale = 30;
  seed = 1;

  constructor(private storage: StorageService) {
    this.scale = this.getRandomArbitrary(40, 80);
    this.smallScale = this.getRandomArbitrary(16, 24);
    this.seed = this.getRandomArbitrary(2, 8);
    this.init();
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
