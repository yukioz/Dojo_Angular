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

    }
}

class evolutions {
    num?: number;
    name?: string;
}