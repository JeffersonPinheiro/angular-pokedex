import { Component } from '@angular/core';
import { Type } from 'C:/Users/Jefferson Pinheiro/source/repos/angular-sandbox/src/_model/Type';
import { Pokemon } from 'C:/Users/Jefferson Pinheiro/source/repos/angular-sandbox/src/_model/Pokemon';

@Component({
  selector: 'app-pokemoon-list',
  templateUrl: './pokemoon-list.component.html',
  styleUrls: ['./pokemoon-list.component.sass']
})
export class PokemoonListComponent {
  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
      number: 2,
      name: 'Ivysaur',
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
      number: 3,
      name: 'Venosaur',
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
      number: 4,
      name: 'Charmander',
      types: [
        Type.Fire,
      ],
    },
  ];
}



