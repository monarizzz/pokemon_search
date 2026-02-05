import PokemonListPage from "@/features/pokemon/components/PokemonListMain/PokemonListMain";
import { NextPage } from "next";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  offset: number;
  limit: number;
};
const PokeForm: NextPage = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      offset: 1,
      limit: 20,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSubmittedData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>offset:</label>
          <input
            {...register("offset", { required: "入力必須です。", min: 0 })}
          />
          {errors?.offset && <p>{errors.offset.message}</p>}
        </p>
        <p>
          <label>limit:</label>
          <input
            {...register("limit", { required: "入力必須です。", min: 1 })}
          />
          {errors?.limit && <p>{errors.limit.message}</p>}
        </p>
        <button type="submit">送信</button>
      </form>
      {submittedData && (
        <PokemonListPage
          offset={submittedData.offset}
          limit={submittedData.limit}
        />
      )}
    </>
  );
};

export default PokeForm;
