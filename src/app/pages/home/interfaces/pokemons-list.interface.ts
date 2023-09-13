export interface PokemonListResult {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  name: string;
  pic: string;
}
