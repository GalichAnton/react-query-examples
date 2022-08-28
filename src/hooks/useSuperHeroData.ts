import axios from "axios";
import { useQuery } from "react-query";

import { SuperHero } from "../types/superHero";

interface UseSuperHeroDataProps {
  onSuccess: (data: SuperHero[]) => void;
  onError: (error: Error) => void;
}

const fetchSuperHeroes = async () => {
  const res = await axios.get<SuperHero[]>("http://localhost:4000/superheroes");
  return res.data;
};

export const useSuperHeroData = ({
  onSuccess,
  onError,
}: UseSuperHeroDataProps) => {
  return useQuery<SuperHero[]>("superheroes", fetchSuperHeroes, {
    enabled: false,
    onError: (err) => onError(err as Error),
    onSuccess: (d) => onSuccess(d),
    // select: (items): string[] => {
    //   return items.map((hero) => hero.name);
    // },
    // staleTime: 10000,
    // refetchOnMount: true,
    // cacheTime: 10000,
    // refetchOnWindowFocus: true,
    // refetchInterval: 5000,
  });
};
