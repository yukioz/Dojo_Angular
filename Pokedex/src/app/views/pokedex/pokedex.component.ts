import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons } from '../../models/pokemon.data';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {

  pokemons: any[] = [];
  // pokeData: Pokemons[] = [];

  constructor(
    private pokeService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((response: any) => {
      this.pokemons = response.pokemon;
      console.log(this.pokemons, "Aki");

      console.log(this.pokemons[0].name, "rusbe");
    })
  }

}
