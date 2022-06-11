import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuscarComponent,
    HomeComponent,
    ListadoComponent,
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
    PokemonsRoutingModule,
  ]
})
export class PokemonsModule { }
