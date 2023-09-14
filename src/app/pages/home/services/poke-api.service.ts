import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of, map } from 'rxjs';
import {
  AllPokemonInfo,
  Pokemon,
  PokemonListResult,
  Result,
} from '../interfaces/pokemons-list.interface';

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  private baseUrl: string = environment.pokeApi.baseUrl;

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonListResult>(`${this.baseUrl}/pokemon?limit=1500`)
      .pipe(map(this.transformPokemons));
  }

  private transformPokemons(resp: PokemonListResult): Pokemon[] {
    const pokeList: Pokemon[] = resp.results.map((pokemon) => {
      const urlArr = pokemon.url.split('/');
      const id = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return {
        id,
        name: pokemon.name,
        pic,
      };
    });

    return pokeList;
  }

  getPokemonByName(name: string): Observable<AllPokemonInfo> {
    return this.http.get<AllPokemonInfo>(`${this.baseUrl}/pokemon/${name}`);
  }
}
