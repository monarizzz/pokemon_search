import { FC } from "react";
import useGetPokemonList from "@/features/hooks/useGetPokemonList";

export const PokemonListPage: FC = () => {
  const { pokemonList, isGetPokemonListFetching, isGetPokemonListError } =
    useGetPokemonList(0, 20);

  if (isGetPokemonListFetching) {
    return "取得中です";
  }

  if (isGetPokemonListError) {
    return "エラーが起きました";
  }

  return (
    <div>
      {pokemonList ? (
        <>
          <div>全部で{pokemonList.count}体</div>
          {pokemonList.results.map((result) => (
            <div key={result.name}> {result.name}</div>
          ))}
        </>
      ) : null}
    </div>
  );
};
export default PokemonListPage;
