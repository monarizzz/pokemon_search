import { FC } from "react";
import useGetPokemonList from "@/features/hooks/useGetPokemonList";

type Props = {
  offset: number;
  limit: number;
};

export const PokemonListPage: FC<Props> = ({ offset, limit }) => {
  const { pokemonList, isGetPokemonListFetching, isGetPokemonListError } =
    useGetPokemonList(offset, limit);

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
