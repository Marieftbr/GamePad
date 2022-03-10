import React from "react";
import { useEffect, useState } from "react";
import client from "../api";
import CardGame from "../components/CardGame";

export default function MyCollection(props) {
  const token = props.token;
  const [games, setGames] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    const response = client.get("/myCollection", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setGames(response.data);
    console.log(response.data);
    setIsLoading(false);
  };

  useEffect(fetchData, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <h1>My Collection</h1>
      {games.map((game, index) => {
        return <CardGame key={index} game={game} />;
      })}
    </div>
  );
}
