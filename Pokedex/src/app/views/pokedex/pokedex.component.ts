import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons } from '../../models/pokemon.data';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {

  pokemons: Pokemons[] = [];
  filteredPokemons: Pokemons[] = [];
  pokeData: any[] = [];
  search: string = "";

  constructor(
    private pokeService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((response: any) => {
      this.pokeData = response.pokemon;

      this.pokeData.forEach((data) => {
        let pokemon: Pokemons = {
          id: data.id,
          num: data.num,
          name: data.name,
          img: data.img,
          type: data.type,
          height: data.height,
          weight: data.weight,
          next_evolution: data.next_evolution,
          prev_evolution: data.prev_evolution,
          weaknesses: data.weaknesses,
        }
        this.pokemons.push(pokemon)
      })
    })
  }

}
