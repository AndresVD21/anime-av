import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { KitsuAnimeService } from '../../services/kitsu-anime.service';
import { takeUntil } from 'rxjs/operators';
import { AnimeList } from '../../models/anime-list';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { MediaQueryService } from 'src/app/shared/services/media-query.service';


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

  showList: boolean = false;
  isDesktop: boolean = false;
  isLoading: boolean = false;

  constructor(
    private animeService: KitsuAnimeService,
    private mediaService: MediaQueryService
  ) { }

  ngOnInit(): void {
    this.getTopAiring();
    this.detectScreenWidth();
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }

  toggleList() {
    this.showList = !this.showList;
  }

  getTopAiring() {
    this.isLoading = true;
    this.animeService.getTopAiring()
      .pipe(takeUntil(this.$destroy))
      .subscribe((data: AnimeList) => {
        this.topAiring = {...data};
        this.isLoading = false;
      });
  }

  detectScreenWidth() {
    this.mediaService.match$
      .pipe(takeUntil(this.$destroy))
      .subscribe(value => {
        this.showList = value;
        this.isDesktop = value;
      });
  }

}
