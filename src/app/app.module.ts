import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import { GameComponent } from './game/game.component';
import { HistoryComponent } from './history/history.component';
import { NavbarComponent } from './navbar/navbar.component';
// import du service commun vers api superheros https://akabab.github.io/superhero-api/api/
import { ApiService } from './shared/api.service';
import { SelectService } from './shared/select.service';
import { TestComponent } from './test/test.component';
import { SelectplayerComponent } from './selectplayer/selectplayer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleryComponent,
    GameComponent,
    HistoryComponent,
    NavbarComponent,
    TestComponent,
    SelectplayerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService, SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
