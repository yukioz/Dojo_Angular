import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.imports';

// Prime and materials imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MenuModule } from 'primeng/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';



// Componentss
import { NavbarComponent } from './component/navbar/navbar.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { PokedexComponent } from './views/pokedex/pokedex.component';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { JogoComponent } from './views/jogo/jogo.component';
import { PokeCardComponent } from './component/poke-card/poke-card.component';
// import { PokemonService } from './services/pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    HomeComponent,
    PokedexComponent,
    FavoritosComponent,
    JogoComponent,
    PokeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MenuModule,
    MatCardModule,
    MaterialModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
