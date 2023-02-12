import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypingService {
  list = [
    'Ghostblade fans have been waiting for the next chapter for the last',
    // 'Ghostblade aficionados have been awaiting the next chapter for the last',
    'The next chapter of Ghostblade has been eagerly anticipated for the last',
    'Ghostblade fans have been longing for the next chapter for the last',
    // 'Ghostblade fandom has been waiting with bated breath for the next chapter for the last'
  ];
  prefix = ``

  constructor() { }
}
