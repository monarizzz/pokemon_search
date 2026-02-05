export type GetPokemonSpeciesRequest = {
  id: number;
};

//TODO: fix
export type GetPokemonSpeciesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};
