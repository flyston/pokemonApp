import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient ) { }

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0`);
  }

  getPokemonsDataByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getPokemonsDataById(id: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
