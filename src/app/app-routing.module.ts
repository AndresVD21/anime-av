import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from './feed/feed.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
