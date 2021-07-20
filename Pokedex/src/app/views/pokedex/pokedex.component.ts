import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons } from '../../models/pokemon.data';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {

  pokeForm?: FormGroup;
  pokemons: Pokemons[] = [];
  filteredPokemons: Pokemons[] = [];
  pokeData: any[] = [];
  search: string = "";

  constructor(
    private formBuilder: FormBuilder,
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
    this.createForm();
  }

  createForm() {
    this.pokeForm = this.formBuilder.group({
      id: ['001'],
      num: ['123'],
      name: ['opa'],
      img: ['ha'],
      type: [['agua'], ['fogo']],
      height: ['450 cm'],
      weight: ['200 kilos'],
      next_evolution: [
        this.formBuilder.group({
          num: ['123'],
          name: ['leopa'],
        })
      ],
      prev_evolution: [
        this.formBuilder.group({
          num: ['321'],
          name: ['apoel'],
        })
      ],
      weaknesses: ['nada'],
    })
    console.log(this.pokeForm.get('name')?.value);
  }



}
