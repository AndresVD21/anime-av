import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

interface MediaQueryList extends EventTarget {
  matches: boolean; // => true if document matches the passed media query, false if not
  media: string; // => the media query used for the matching
}

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {

  private matches = new ReplaySubject<boolean>();
  public match$ = this.matches.asObservable();
  public query: string;

  constructor() {
    this.query = '(min-width: 800px)';
    if (window) {
      const mediaQueryList = window.matchMedia(this.query);
      const listener = (event: any) => this.matches.next(event.matches);
      listener(mediaQueryList);
      mediaQueryList.addEventListener('change', listener);
    }
  }
  
}
