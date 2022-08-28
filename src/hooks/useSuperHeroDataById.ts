import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

import { SuperHero } from "../types/superHero";

const fetchSuperHeroById = async (id: string) => {
  const res = await axios.get<SuperHero>(
    `http://localhost:4000/superheroes/${id}`
  );
  return res.data;
};

export const useSuperHeroDataById = (heroId: string) => {
  const queryClient = useQueryClient();
  return useQuery<SuperHero>(
    ["super-hero-by-id", heroId],
    () => fetchSuperHeroById(heroId),
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData<SuperHero[]>("superheroes")
          ?.find((item) => item.id === +heroId);
        if (hero) {
          return hero;
        } else return undefined;
      },
    }
  );
};
