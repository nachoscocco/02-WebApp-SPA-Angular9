import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../service/heroes.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) {
    
   }

  ngOnInit(): void {
  }

   buscarHeroe(h: String) {
    console.log(h);
     this._router.navigate(['/buscado', h])
  }

}
