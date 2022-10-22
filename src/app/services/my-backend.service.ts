import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Backend } from '../interfaces/backend.interface';
import { NewPokemon } from '../interfaces/new-pokemon.interface';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MyBackendService {

  private urlBase: string;

  constructor(private httpClient: HttpClient) {
    this.urlBase = environment.urlBase;
  }

  create(data: Backend): Observable<NewPokemon> {
    return this.httpClient.post<NewPokemon>(
      `${this.urlBase}/collections/pokemones/records`,
      data
    );
  }
}
