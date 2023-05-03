import {Component, OnInit, Type} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { PokemonService } from 'src/_services/pokemonService.service';
import { Pokemon } from 'C:/Users/Jefferson Pinheiro/source/repos/angular-sandbox/src/_model/Pokemon';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.sass']
})
export class PokemonFilterComponent implements OnInit {
  
  constructor(
    public pokemonService: PokemonService
  ){

  }
  
  myControl = new FormControl('');
  //options: Pokemon[] = this.pokemonService.pokemons;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit(): void{
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
    map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option .toLowerCase().includes(filterValue))
  }

}
