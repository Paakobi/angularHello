import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero [] = [];
  
   private heroService: HeroService;

    /* option wiring*/
    // constructor( private heroService: HeroService) {}
    /* Making this different from Tour of Heroes to make it clear but it means the same thing*/
    constructor( heroService: HeroService) {
      this.heroService = heroService;
    }      

    ngOnInit(): void {
      this.getHeroes();
    }

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    
     }

    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }
    

  }