import { Component, Input, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon.data';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input()
  data?: any;

  name: string = this.data?.name;
  image: string = '';
  type: string[] = [];

  constructor() { }

  ngOnInit(): void {
    
    //this.name = this.data.name;
    // this.image = this.data.img;
    // this.type = this.data.type;

    console.log(this.data);

  }

}
