import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon.data';
import { colorType } from './colors';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})

export class PokeCardComponent implements OnInit, OnChanges {
  @Input()
  data: Pokemons = new Pokemons();

  box: boolean = true;
  color: string[] = [];
  colorWeak: string[] = [];

  constructor() { }

  ngOnChanges (change: SimpleChanges): void {
    let x: number = 0;
    change.data.currentValue.type.forEach((tipo: string) => {
      this.color[x] = colorType[tipo];
      x++;
    });
    x=0;
    change.data.currentValue.weaknesses.forEach((tipo: string) => {
      this.colorWeak[x] = colorType[tipo];
      x++;
    });
    console.log(change);
  }

  ngOnInit(): void {

  }

  // Métodos

  toggle(): void {
    this.box = !this.box;
    console.log(this.box);
  }

}
