import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [];
  
  constructor( private _heroesService: HeroesService ) {
      console.log('constructor');
  
     }

   ngOnInit(): void {
    console.log('ngOnInit');
    console.log('////////////');
    this.heroes = this._heroesService.getHeoes();
    console.log(this.heroes);

  }

}
