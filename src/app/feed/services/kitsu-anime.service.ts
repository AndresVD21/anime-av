import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimeList } from '../models/anime-list';

@Injectable({
  providedIn: 'root'
})
export class KitsuAnimeService {

  BASE_URL: string = "https://kitsu.io/api/edge";

  constructor(
    private http: HttpClient
  ) { }

  getTopAiring() {
    return this.http.get<AnimeList>(`${this.BASE_URL}/anime`, 
      {
        params: {
          'filter[status]': 'current', 
          'filter[subtype]': 'TV',
          'sort': '-averageRating,-userCount',
          'page[limit]': '10'
        }
      })
  }

  getAnimesBySeason(season: string) {
    let currentYear = new Date().getFullYear();
    return this.http.get<AnimeList>(`${this.BASE_URL}/anime`, 
      {
        params: {
          // 'filter[year]': `${currentYear}`, 
          'filter[season]': `${season}`, 
          'filter[seasonYear]': `${currentYear}`, 
          'filter[subtype]': 'TV',
          'sort': 'startDate',
          'page[offset]': '0',
          'page[limit]': '20'
        }
      })
  }

  getAllAnimes() {
    let currentYear = new Date().getFullYear();
    return this.http.get<AnimeList>(`${this.BASE_URL}/anime`, 
      {
        params: {
          'filter[seasonYear]': `${currentYear}`, 
          'filter[subtype]': 'TV',
          'sort': 'startDate',
          'page[offset]': '0',
          'page[limit]': '20'
        }
      })
  }


}
