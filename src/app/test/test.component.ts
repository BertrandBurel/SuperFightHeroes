import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  heroes; // all the heroes
  hero; // hero par rapport a son id
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
    this.apiService.getHeroesId(12).subscribe(hero => {
      console.log(hero);

    });
    this.apiService.getHeroesPower(13).subscribe(hero => {
      console.log(hero);

    });
    this.apiService.getHeroesAppearance(14).subscribe(hero => {
      console.log(hero);

    });
    this.apiService.getHeroesBiography(14).subscribe(hero => {
      console.log(hero);

    });
    // this.apiService.getHeroesImageXs(this.heroes.slug).subscribe(hero => {
    //   console.log(hero);

    // });


  }

}
