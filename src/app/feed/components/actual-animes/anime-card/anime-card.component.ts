import { Component, Input, OnInit } from '@angular/core';
import { AnimeAttributes } from 'src/app/feed/models/anime-attributes';
import { AnimeItem } from 'src/app/feed/models/anime-item';

@Component({
  selector: 'anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent implements OnInit {

  @Input() anime: AnimeItem;

  constructor() { }

  ngOnInit(): void {
  }

  getCanonicalTitle(): string {
    return this.anime.attributes.canonicalTitle;
  }

  getTitles() {
    return this.anime.attributes.titles;
  }

  getAnimeAttributes(): AnimeAttributes {
    return this.anime.attributes;
  }

  getIntegerRating(): number {
    return Math.ceil(+this.anime.attributes.averageRating);
  }

}
