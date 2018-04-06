import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import { GameComponent } from './game/game.component';
import { HistoryComponent } from './history/history.component';
import { TestComponent } from './test/test.component';
import { SelectplayerComponent } from './selectplayer/selectplayer.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'game', component: GameComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'test', component: TestComponent },
  { path: 'select', component: SelectplayerComponent },

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
