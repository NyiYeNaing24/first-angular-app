import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  
  constructor(private heroService: HeroService) {};
  
  heroes : Hero[] = [];

  getHeroes(): void {
    this.heroes = this.heroService.getHeros();
  }
  selectHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

