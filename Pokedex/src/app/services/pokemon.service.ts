import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable  }  from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pokemons } from '../models/pokemon.data';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {

    baseUrl="https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

    constructor(
        private snackBarr: MatSnackBar,
        private http: HttpClient
    ) { }

    alertModal(msg: string): void {
        this.snackBarr.open(msg, 'fechar', {
            duration: 5000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        })
    }

    getPokemons():  Observable<Pokemons[]> {
        return this.http.get<Pokemons[]>(this.baseUrl)
    }

}
