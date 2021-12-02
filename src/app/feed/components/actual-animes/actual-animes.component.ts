import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnimeItem } from '../../models/anime-item';
import { AnimeList } from '../../models/anime-list';
import { KitsuAnimeService } from '../../services/kitsu-anime.service';

@Component({
  selector: 'actual-animes',
  templateUrl: './actual-animes.component.html',
  styleUrls: ['./actual-animes.component.scss']
})
export class ActualAnimesComponent implements OnInit, OnDestroy {

  private $destroy: Subject<boolean> = new Subject<boolean>();

  animes: AnimeList;
  actualSeasonFilter: string;
  currentYear: number = new Date().getFullYear();

  constructor(
    private animeService: KitsuAnimeService
  ) { }

  ngOnInit(): void {
    this.getAllAnimes();
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

  getAnimeBySeason(season: string) {
    this.actualSeasonFilter = season;
    this.animeService.getAnimesBySeason(season)
      .pipe(takeUntil(this.$destroy))
      .subscribe(data => {
        this.animes = {...data};
      });
  }

  getAllAnimes() {
    this.actualSeasonFilter = 'all';
    this.animeService.getAllAnimes()
    .pipe(takeUntil(this.$destroy))
    .subscribe(data => {
      this.animes = {...data};
    });
  }

  getAnimeListData(): AnimeItem[] {
    return this.animes?.data || [];
  }

  isFilterAll(): boolean {
    return this.actualSeasonFilter === 'all';
  }

  seasonTitle(season: string): string {
    return `anime ${season} ${this.currentYear}`
  }


}
