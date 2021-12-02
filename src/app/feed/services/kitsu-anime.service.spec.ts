import { TestBed } from '@angular/core/testing';

import { KitsuAnimeService } from './kitsu-anime.service';

describe('KitsuAnimeService', () => {
  let service: KitsuAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitsuAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
