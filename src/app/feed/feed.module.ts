import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopAiringComponent } from './components/top-airing/top-airing.component';
import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AnimeItemComponent } from './components/top-airing/anime-item/anime-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActualAnimesComponent } from './components/actual-animes/actual-animes.component';
import { AnimeCardComponent } from './components/actual-animes/anime-card/anime-card.component'

@NgModule({
  declarations: [
    TopAiringComponent,
    FeedComponent,
    AnimeItemComponent,
    ActualAnimesComponent,
    AnimeCardComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class FeedModule { }
