import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardGame from "../components/CardGame";

export default function Game() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  const [sameGames, setSameGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGamesSuggested = async () => {
    const response = await axios.get(
      `http://localhost:3000/games/${id}/suggested`
    );
    console.log(response.data);
    setSameGames(response.data.games);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/game/${id}`);
      console.log(response.data);
      setData(response.data.game);
      setIsLoading(false);
    };
    fetchData();
    fetchGamesSuggested();
  }, [id]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <h1 className="game-title">{data.name}</h1>
      <div className="infos-game">
        <div className="picture-game-wrapper">
          <img
            className="game-picture"
            src={data.background_image}
            alt="game"
          />
        </div>
        <div className="text-infos">
          <div className="btns">
            <button className="btn-game-page">
              Save to Collection{" "}
              <FontAwesomeIcon
                className="icon-list fa-xl"
                icon="fa-regular fa-bookmark"
              />
            </button>
            <button className="btn-game-page">
              Add a review
              <FontAwesomeIcon
                className="icon-list fa-xl"
                icon=" fa-regular fa-message"
              />
            </button>
          </div>
          <div className="lines">
            <div className="platforms">
              <h3>Platforms</h3>
              <div>
                {data.platforms.map((item, index) => {
                  return <span key={index}>{item.platform.name}, </span>;
                })}
              </div>
            </div>
            <div className="genres">
              <h3>Genres</h3>
              <div>
                {data.genres.map((item, index) => {
                  return <span key={index}>{item.name}, </span>;
                })}
              </div>
            </div>
          </div>
          <div className="lines">
            <div className="released-date">
              <h3>Release date</h3>
              <span>{data.released}</span>
            </div>
            <div className="developer">
              <h3>Developper</h3>
              {data.developers.map((item, index) => {
                return <span key={index}>{item.name} ,</span>;
              })}
            </div>
          </div>
          <div className="lines">
            <div className="publisher">
              <h3>Publisher</h3>
              {data.publishers.map((item, index) => {
                return <span key={index}>{item.name}</span>;
              })}
            </div>
            <div className="age-rating">
              <h3>Age rating</h3>
              {data.esrb_rating.name}
            </div>
          </div>
          <div className="about">
            <h3>About</h3>
            {data.description_raw}
          </div>
        </div>
      </div>
      <div className="games-alike">
        <h2 className="second-game-title">Games like {data.name}</h2>
        <div className="same-games-wrapper">
          {sameGames.map((item, index) => {
            return <CardGame key={index} game={item} />;
          })}
        </div>
      </div>

      <div className="reviews-part">
        <div className="position-parent">
          <h2 className="second-game-title">Reviews</h2>
          <span className="sub-text">{data.reviews_text_count}</span>
        </div>
      </div>
    </div>
  );
}
