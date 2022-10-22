import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend } from '../interfaces/backend.interface';
import { NewPokemon } from '../interfaces/new-pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class MyBackendService {

  private urlBase: string;

  constructor(private httpClient: HttpClient) {
    this.urlBase = 'http://localhost:8090/api';
  }

  create(data: Backend): Observable<NewPokemon> {
    return this.httpClient.post<NewPokemon>(
      `${this.urlBase}/collections/pokemones/records`,
      data
    );
  }
}
