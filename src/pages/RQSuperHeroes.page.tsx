import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { SuperHero } from "../types/superHero";

const fetchSuperHeroes = async () => {
  const res = await axios.get<SuperHero[]>("http://localhost:4000/superheroes");
  return res.data;
};

const RqSuperHeroesPage = () => {
  const onSuccess = (result: SuperHero[]) =>
    console.log("Successfully fetched Super Heroes", result);

  const onError = (error: Error) =>
    console.log("Error fetching Super Heroes", error);

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery<
    SuperHero[]
  >("superheroes", fetchSuperHeroes, {
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

  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError && error instanceof Error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={() => refetch()}>Fetch</button>
      {data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RqSuperHeroesPage;
