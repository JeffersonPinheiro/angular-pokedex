import { Component } from '@angular/core';
import { Type } from 'C:/Users/Jefferson Pinheiro/source/repos/angular-sandbox/src/_model/Type';
import { Pokemon } from 'C:/Users/Jefferson Pinheiro/source/repos/angular-sandbox/src/_model/Pokemon';
import { PokemonService } from 'src/_services/pokemonService.service';

@Component({
  selector: 'app-pokemoon-list',
  templateUrl: './pokemoon-list.component.html',
  styleUrls: ['./pokemoon-list.component.sass']
})
export class PokemoonListComponent {
  
  constructor(
    public pokemonService: PokemonService
  ){
    
  }
}



