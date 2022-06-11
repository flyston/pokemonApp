import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../../services/pokemons.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  pokemons: any[] = [];
  page = 0;
  totalPokemons: number = 0;

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
    this.pokemons = [];
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe((pokemons: any) => {
      this.totalPokemons = pokemons.count;
      pokemons.results.forEach((result: any) => {
        this.pokemonService.getPokemonsDataByName(result.name).subscribe((result: any) => {
          this.pokemons.push(result);
          // console.log(this.pokemons);
        });
      });
    });
  }
}
