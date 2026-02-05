import {
  GetPokemonSpeciesRequest,
  GetPokemonSpeciesResponse,
} from "../api/PokemonSpecies";

export const getPokemonSpecies = async ({
  id,
}: GetPokemonSpeciesRequest): Promise<GetPokemonSpeciesResponse> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
  );
  return response.json();
};
