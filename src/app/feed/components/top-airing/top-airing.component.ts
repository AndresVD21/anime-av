import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { KitsuAnimeService } from '../../services/kitsu-anime.service';
import { takeUntil } from 'rxjs/operators';
import { AnimeList } from '../../models/anime-list';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'top-airing',
  templateUrl: './top-airing.component.html',
  styleUrls: ['./top-airing.component.scss']
})
export class TopAiringComponent implements OnInit, OnDestroy {

  private $destroy: Subject<boolean> = new Subject<boolean>();

  topAiring: AnimeList;
  up = faChevronUp;
  down = faChevronDown

  showList = false;

  constructor(
    private animeService: KitsuAnimeService
  ) { }

  ngOnInit(): void {
    this.animeService.getTopAiring()
      .pipe(takeUntil(this.$destroy))
      .subscribe((data: AnimeList) => {
        this.topAiring = {...data};
      });
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

  toggleList() {
    this.showList = !this.showList;
  }

}
