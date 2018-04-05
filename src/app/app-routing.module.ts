import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import { GameComponent } from './game/game.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: GaleryComponent },
  { path: 'home', component: GameComponent },
  { path: 'home', component: HistoryComponent },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
