import { GetPokemonListResponse } from "@/infra/poke-api/api/pokemon";
import { getPokemonList } from "@/infra/poke-api/repositories/pokemon";
import { useQuery } from "@tanstack/react-query";

const useGetPokemonList = (offset: number, limit: number) => {
  const { data, isError, isLoading } = useQuery<GetPokemonListResponse>({
    queryKey: ["pokemon-list", offset, limit],
    queryFn: async () => {
      return await getPokemonList({ offset, limit });
    },
  });

  return {
    pokemonList: data,
    isGetPokemonListFetching: isLoading,
    isGetPokemonListError: isError,
  };
};

export default useGetPokemonList;
