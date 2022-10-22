import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../interfaces/pokedex.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon/ditto';
  }

  getPokemon(): Observable<Pokedex> {
    return this.httpClient.get<Pokedex>(this.url);
    // .subscribe({
    //   next: data => {
    //     console.log(data);
    //   },
    //   error: error => {
    //     console.log(error)
    //   },
    //   complete: () => {},
    // });
  }
}
