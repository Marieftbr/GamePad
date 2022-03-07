import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Game() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/game/${id}`);
      console.log(response.data);
      setData(response.data.game);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <h1>Game name</h1>
      <div className="infos-game">
        <div className="picture-game">
          <p>Picture of the game</p>
        </div>
        <div className="text-infos">
          <div className="btns">
            <button>Save to Collection</button>
            <button>Add a review</button>
          </div>
          <div className="lines">
            <p>Platforms</p>
            <p>all platforms for this game</p>
            <p>Genres</p>
            <p>all genres for this game</p>
          </div>
          <div className="lines">
            <p>Release date</p>
            <p>release date for this game</p>
            <p>Developper</p>
            <p>all developpers for this game</p>
          </div>
          <div className="lines">
            <p>Publisher</p>
            <p>publisher for this game</p>
            <p>Age rating</p>
            <p>age for play this game</p>
          </div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum
            doloribus error recusandae animi autem tempora, voluptatem
            blanditiis labore reprehenderit totam facere eius doloremque a
            consectetur numquam? Accusantium, incidunt officia.
          </div>
        </div>
        <div className="games-alike">
          <h2>Games like this Game</h2>
        </div>
      </div>
      <div className="reviews">toto</div>
    </div>
  );
}
