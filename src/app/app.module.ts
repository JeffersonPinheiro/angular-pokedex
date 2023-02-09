import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemoonListComponent } from './pokemoon-list/pokemoon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from 'src/_services/pokemonService.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemoonListComponent,
    PokemonCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    
    PokemonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
