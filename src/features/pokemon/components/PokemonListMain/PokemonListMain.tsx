import { GetPokemonListResponse } from "@/infra/poke-api/api/pokemon";
import { getPokemonList } from "@/infra/poke-api/repositories/pokemon";
import { FC, useEffect, useState } from "react";

export const PokemonListPage: FC = () => {
  const [data, setData] = useState<GetPokemonListResponse>();

  useEffect(() => {
    getPokemonList({ limit: 0, offset: 0 }).then((result) => setData(result));
  }, []);

  if (!data) {
    return "値が取れていません";
  }

  return (
    <>
      <div>全部で{data.count}体</div>
      {data.results.map((result) => (
        <div key={result.name}>{result.name}</div>
      ))}
    </>
  );
};
export default PokemonListPage;
