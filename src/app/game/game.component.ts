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

  str1: number = this.select.players[0].powerstats.strength;
  str2: number = this.select.players[1].powerstats.strength;
  combat1: number = this.select.players[0].powerstats.combat;
  combat2: number = this.select.players[1].powerstats.combat;
  speed1: number = this.select.players[0].powerstats.speed;
  speed2: number = this.select.players[1].powerstats.speed;
  health1: number = this.select.players[0].powerstats.durability;
  health2: number = this.select.players[1].powerstats.durability;
  intelligence1: number = this.select.players[0].powerstats.intelligence;
  intelligence2: number = this.select.players[1].powerstats.intelligence;
  power1: number = this.select.players[0].powerstats.power;
  power2: number = this.select.players[1].powerstats.power;
  vie1 = '';
  vie2 = '';
  heroes; // all the heroes
  hero; // hero par rapport a son id
  constructor( private apiService: ApiService, public select: SelectService, private router: Router) { }

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
  attack1(id) {
    /*this.select.players[id];  */
    // this.select.players[id].life -= 10;
    // this.test = this.test - 10;
    if (this.select.players[id].life < 0 ) {
      this.select.players[id].life = 0;
      window.alert('player 1 loose');
    } else if (this.select.players[id].life > 100) {
      this.select.players[id].life = 100;
    } else {
      this.select.players[id].life -= (this.str1 * (1 + (this.combat1 - this.combat2) / 100)) / 2;
      console.log(this.select.players[id].life);
    }
  }

  attack2(id) {
    /*this.select.players[id];  */
    // this.select.players[id].life -= 10;
    // this.test = this.test - 10;
    this.select.players[id].life -= (this.str2 * (1 + (this.combat2 - this.combat1) / 100)) / 2;
    console.log(this.select.players[id].life);
  }
  defense(id) {

  }
  heal1(id) {
    this.select.players[id].life += 10 * (this.intelligence1 + this.power1) / 100;
    if (this.health1 > this.select.players[id].durability) {
      this.select.players[id].life = this.select.players[id].durability;
    } else if (this.health1 < 0) {
      this.health1 = 0;
    }
  }
  heal2(id) {
    this.select.players[id].life += 10 * (this.intelligence2 + this.power2) / 100;
    if (this.health2 > this.select.players[id].durability) {
      this.select.players[id].life = this.select.players[id].durability;
    } else if (this.health2 < 0) {
      this.select.players[id].life = 0;
  }
}
}
