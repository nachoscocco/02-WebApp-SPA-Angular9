import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

//servicios
import { HeroesService } from './service/heroes.service';


//rutas
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';


//rutas
@NgModule({

  // componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent
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
