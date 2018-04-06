import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { GaleryComponent } from './../galery/galery.component';
import { SelectService } from './../shared/select.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  heroes; // all the heroes
  hero; // hero par rapport a son id
  constructor(private apiService: ApiService, private select: SelectService, private router: Router) { }

  ngOnInit() {
    console.log(this.select.players);

    if (this.select.players.length !== 2) {
      this.router.navigate(['select']);

    }

    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }
}
