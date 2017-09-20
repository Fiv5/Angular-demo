import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
    <h2>
      {{hero.name}} details!
    </h2>
    <div>
      <label for="">id:</label>
      {{hero.id}}
    </div>
    <div>
      <label for="">name:</label>
      <input type="text" [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
    `,
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  @Input() hero: Hero;

  ngOnInit():void {
    this.route.paramMap
      // TODO
  }
}
