export class Pokemons {
    id?: number;
    num?: number;
    name?: string;
    img?: string;
    type: string[];
    height?: number;
    weight?: number;
    next_evolution: evolutions[];
    prev_evolution: evolutions[];
    weaknesses?: string[];

    constructor() {
        this.type = [];
        this.next_evolution = [];
        this.prev_evolution = [];
    }
}

class evolutions {
    num?: number;
    name?: string;
}