import { Component, Input, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon.data';
import { colorType } from './colors';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})

export class PokeCardComponent implements OnInit {
  @Input()
  data: Pokemons = new Pokemons();

  pokemon: Pokemons = this.data;

  color: string = colorType["normal"];

  constructor() { }

  ngOnInit(): void {
    console.log("normal");
  }
  
  teste(a: string) {
    switch(a) {
      case normal:
        "#A8A77A",
        break;
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD",
    };
    }
  }

}
