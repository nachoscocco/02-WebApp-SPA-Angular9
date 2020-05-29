import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';

//servicios
import { HeroesService } from './service/heroes.service';


//rutas
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BuscadoComponent } from './components/buscado/buscado.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';



//rutas
@NgModule({

  // componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadoComponent,
    HeroeTarjetaComponent
  ],
   // modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
    // servicios
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
