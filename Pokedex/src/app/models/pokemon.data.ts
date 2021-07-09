export class Pokemons {
    id?: number;
    num?: number;
    name?: string;
    img?: string;
    type?: String[];
    height?: number;
    weight?: number;
    next_evolution?: evolutions[];
    prev_evolution?: evolutions[];
    weaknesses?: string[];

    constructor() {
        // this.next_evolution  = [];
        // this.prev_evolution = [];
        // this.type = [];
    }
}

class evolutions {
    num?: number;
    name?: string;
}