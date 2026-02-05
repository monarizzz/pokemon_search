import { FC, useState } from "react";
import PokemonListPage from "@/features/pokemon/components/PokemonListMain/PokemonListMain";

const PokeFetch: FC = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(1);

  const formFn = (formData) => {
    setOffset(formData.get("offset"));
    setLimit(formData.get("limit"));
  };

  return (
    <>
      <form action={formFn}>
        <p>
          <label htmlFor="offset">offset:</label>
          <input min="0" type="number" id="offset" name="offset" />
        </p>
        <p>
          <label htmlFor="limit">limit:</label>
          <input min="1" type="number" id="limit" name="limit"></input>
        </p>
        <button type="submit">送信</button>
      </form>
      <PokemonListPage offset={Number(offset)} limit={Number(limit)} />
    </>
  );
};
export default PokeFetch;
