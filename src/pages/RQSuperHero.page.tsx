import React from "react";

import { useParams } from "react-router-dom";

import { useSuperHeroDataById } from "../hooks/useSuperHeroDataById";

const RqSuperHeroPage = () => {
  const { heroId } = useParams();

  const { data, isLoading, isError } = useSuperHeroDataById(heroId!);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }
  return (
    <div>
      {data?.name} - {data?.alterEgo}
    </div>
  );
};

export default RqSuperHeroPage;
