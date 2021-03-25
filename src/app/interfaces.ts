export enum TYPE_COLOURS {
  normal = 'B1B1B1',
  electric = 'ffff00',
  fire = 'ff0000',
  water = '3399ff',
  grass = '33cc33',
  dark = '813296',
  rock = '808080',
  poison = 'ff00ff',
  bug = '997639',
  ground = '996600',
  psychic = 'f0d4c0',
  fighting = 'ff9933',
  ghost = 'e6e6e6',
  ice = '88c3eb',
  dragon = '6ca182',
  steel = 'b8b8b8',
  fairy = 'de9edb',
  flying = '7badd4'
}

export interface Results {
  id?: string;
  name: string;
  url: string;
  details: PokemonDetails;
  description?: string;
}

export interface PokeAPI {
  count: number;
  next: string;
  results: Results[];
}

export interface PokemonDetails {
  name: string;
  id: number;
  sprites: Array<any>;
  stats: Array<any>;
  skills: Array<any>;
  abilities?: Array<any>;
  types?: Array<any>;
}
