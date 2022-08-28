import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useAddHero } from "../hooks/useAddHero";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { SuperHero } from "../types/superHero";

const RqSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const { mutate: addHero } = useAddHero();
  const onSuccess = (result: SuperHero[]) =>
    console.log("Successfully fetched Super Heroes", result);

  const onError = (error: Error) =>
    console.log("Error fetching Super Heroes", error);

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData({ onSuccess, onError });

  console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError && error instanceof Error) {
    return <h2>Error: {error.message}</h2>;
  }

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo, id: Date.now() };
    addHero(hero);
  };

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={() => refetch()}>Fetch</button>
      {data?.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default RqSuperHeroesPage;
