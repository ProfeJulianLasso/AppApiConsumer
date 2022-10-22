import { Component, OnInit } from '@angular/core';
import { Backend } from '../interfaces/backend.interface';
import { Pokedex } from '../interfaces/pokedex.interface';
import { MyBackendService } from '../services/my-backend.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.scss']
})
export class ConsumoApiComponent implements OnInit {

  nombre: string;
  pokemon!: Pokedex;
  flag: boolean;

  constructor(
    private pokemon$: PokemonService,
    private backend$: MyBackendService
  ) {
    this.nombre = '';
    this.flag = true;
  }

  ngOnInit(): void {
    this.llamarPokemon();
  }

  llamarPokemon(): void {
    this.pokemon$.getPokemon().subscribe({
      next: data => {
        console.log(data);
        this.nombre = data.name;
        this.pokemon = data;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.flag = false;
      },
    });
  }

  createData(): void {
    const data: Backend = {
      name: 'Faber',
      pokeid: 123
    };
    this.backend$.create(data).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      },
      complete: () => { },
    });
  }

}
