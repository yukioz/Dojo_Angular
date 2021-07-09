import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { HomeComponent } from './views/home/home.component';
import { PokedexComponent } from './views/pokedex/pokedex.component';
import { FavoritosComponent } from './views/favoritos/favoritos.component';
import { JogoComponent } from './views/jogo/jogo.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "pokedex",
    component: PokedexComponent,
  },
  {
    path: "jogo-da-velha",
    component: JogoComponent,
  },
  {
    path: "favoritos",
    component: FavoritosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
