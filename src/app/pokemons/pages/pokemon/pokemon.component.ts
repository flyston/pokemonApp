import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  id: number = 0;
  totalPokemons: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private pokemonService: PokemonsService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => this.id = id);
    // console.log(this.id);
    this.pokemonService.getPokemons().subscribe((pokemons: any) => {
      pokemons.results.forEach((result: any) => {
        this.pokemonService.getPokemonsDataById(this.id).subscribe((result: any) => {
          this.pokemon = result;
          // console.log(this.pokemon);
        });
      });
    });
  }

  regresarListado() {
    this.router.navigate(['/pokemons/listado'])
  }

  regresarBuscador() {
    this.router.navigate(['/pokemons/buscador']);
  }

}
