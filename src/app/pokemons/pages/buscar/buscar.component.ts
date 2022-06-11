import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../../services/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  pokemons: any = [];
  pokemon: any = [];
  sugerencias: any = [];

  constructor( private pokemonService: PokemonsService,
               private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons: any) => {
      pokemons.results.forEach((result: any) => {
          this.pokemons.push(result.name);
      });
    });
  }

  buscando() {
    
  }

  verPokemon(nombre: any) {
    this.pokemonService.getPokemonsDataByName(nombre).subscribe(pokemon => {
      this.pokemon = pokemon;
      // console.log(this.pokemon);
      this.router.navigate(['/pokemons', this.pokemon.id ]);
    });
  }

}
