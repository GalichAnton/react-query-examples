import axios from "axios";
import { QueryClient, useMutation } from "react-query";

import { SuperHero } from "../types/superHero";

const addHero = async (hero: SuperHero) => {
  const res = await axios.post<SuperHero>(
    "http://localhost:4000/superheroes",
    hero
  );
  return res.data;
};

export const useAddHero = () => {
  const queryClient = new QueryClient();
  return useMutation(addHero, {
    onSuccess: (data: SuperHero) => {
      console.log(data);
      const old = queryClient.getQueryData<SuperHero[]>("superheroes");
      if (old) {
        queryClient.setQueryData("superheroes", [...old, data]);
      }
    },
  });
};
