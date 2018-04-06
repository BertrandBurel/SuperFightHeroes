import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { GaleryComponent } from './../galery/galery.component';
import { SelectService } from './../shared/select.service';
import { Router } from '@angular/router';
export class Hero {
  name: string;
  pv: number;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };

}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  test: number = this.select.players[0].powerstats.strength;
  vie1 = '';
  vie2 = '';
  heroes; // all the heroes
  hero; // hero par rapport a son id
  constructor(private apiService: ApiService, public select: SelectService, private router: Router) { }

  ngOnInit() {
    console.log(this.select.players);

    if (this.select.players.length !== 2) {
      this.router.navigate(['select']);

    }

    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
    // this.vie1 = '100%';
    // this.vie2 = '100%';


  }
  attack(id) {
    /*this.select.players[id];  */
    this.select.players[id].life -= 10;
    // this.test = this.test - 10;
    console.log(this.select.players[id].life);
  }

  defense(id) {}
  heal(id) {}

}
