import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'C:/Users/Jefferson Pinheiro/source/repos/angular-sandbox/src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;
}
