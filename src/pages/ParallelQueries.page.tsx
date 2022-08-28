import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

import { Friend } from "../types/friends";
import { SuperHero } from "../types/superHero";

const fetchSuperHeroes = async () => {
  const res = await axios.get<SuperHero[]>("http://localhost:4000/superheroes");
  return res.data;
};

const fetchFriends = async () => {
  const res = await axios.get<Friend[]>("http://localhost:4000/friends");
  return res.data;
};

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("superheroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div></div>;
};

export default ParallelQueriesPage;
