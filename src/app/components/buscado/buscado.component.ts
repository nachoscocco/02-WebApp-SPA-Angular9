import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscado',
  templateUrl: './buscado.component.html',
  styleUrls: ['./buscado.component.css']
})
export class BuscadoComponent implements OnInit {
  heroes:any[] =[];
  encontrado:string;
  constructor(private _rutaActiva: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router           
  ) {
   
    }

  ngOnInit(): void {
    this._rutaActiva.params.subscribe(params => {
      this.encontrado=params['id'];
      this.heroes = this._heroesService.buscarHeroes(params['id']);
      console.log('este heroe es', this.heroes);


    })
  }
  verHeroe(idx: number) {
    /* console.log(idx); */
    this._router.navigate(['/heroe', idx])
  }
}
