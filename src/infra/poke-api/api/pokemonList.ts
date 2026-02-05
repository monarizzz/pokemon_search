export type GetPokemonListRequest = {
  offset: number;
  limit: number;
};

export type GetPokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};
