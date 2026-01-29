import { GetPokemonListRequest, GetPokemonListResponse } from "../api/pokemon";

export const getPokemonList = async ({
  offset,
  limit,
}: GetPokemonListRequest): Promise<GetPokemonListResponse> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
  );
  return response.json();
};
