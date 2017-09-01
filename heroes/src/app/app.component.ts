import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService], //Tells angular to create a fresh instance of heroservice, App component and its child data can use this to get hero data
})




export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){} //. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  //initialize by calling get heroes
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  

}
