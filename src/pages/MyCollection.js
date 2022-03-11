import React from "react";
import { useEffect, useState } from "react";
import client from "../api";
import CardGame from "../components/CardGame";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBookmark);

export default function MyCollection(props) {
  const token = props.token;
  const [games, setGames] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await client.get("/myCollection", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setGames(response.data);
    setIsLoading(false);
  };

  const removeGame = async (event, game) => {
    event.preventDefault();
    await client.post(
      "/deleteToMyCollection",
      {
        id: game.id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    await fetchData();
  };

  useEffect(fetchData, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <h1>My Collection</h1>
      <div className="game-card-container">
        {games.map((game, index) => {
          return (
            <CardGame
              key={index}
              game={game}
              displayFavIcon={true}
              removeGame={(event) => removeGame(event, game)}
            />
          );
        })}
      </div>
    </div>
  );
}
