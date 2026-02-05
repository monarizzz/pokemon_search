import { GetPokemonListResponse } from "@/infra/poke-api/api/pokemonList";
import { getPokemonSpecies } from "@/infra/poke-api/repositories/getPokemonSpecies";
import { useQuery } from "@tanstack/react-query";

const useGetPokemonSpecies = (id: number) => {
  const { data, isError, isLoading } = useQuery<GetPokemonListResponse>({
    queryKey: ["pokemon-species", id],
    queryFn: async () => {
      return await getPokemonSpecies({ id });
    },
  });

  return {
    pokemonList: data,
    isGetPokemonListFetching: isLoading,
    isGetPokemonListError: isError,
  };
};

export default useGetPokemonSpecies;
