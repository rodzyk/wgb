import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set<T>(key: string, value: T) {
    const stringV = JSON.stringify(value);
    console.log(stringV);
    
    localStorage.setItem(key, stringV);
  }

  get<T>(key: string): T | null {
    const v = localStorage.getItem(key)

    if(v === null) return null;
    
    return JSON.parse(v) as T;
  }
}
