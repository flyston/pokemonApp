import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: PokemonComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonsRoutingModule { }
