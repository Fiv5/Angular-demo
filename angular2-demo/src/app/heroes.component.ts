import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}

