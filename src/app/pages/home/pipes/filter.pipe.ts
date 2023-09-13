import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemons-list.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    pokemons: Pokemon[],
    page: number = 0,
    search: string = ''
  ): Pokemon[] {
    if (search.length === 0) return pokemons.slice(page, page + 20);

    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(search)
    );
    return filtered.slice(page, page + 20);
  }
}
