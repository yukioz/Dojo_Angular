import { Component, Input, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon.data';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input()
  data: Pokemons = new Pokemons();

  constructor() { }

  ngOnInit(): void {

  }

}
