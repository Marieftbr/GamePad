import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardGame from "../components/CardGame";
import ReviewsCard from "../components/ReviewsCard";
import { useHref } from "react-router-dom";
import client from "../api";
import { useNavigate } from "react-router-dom";

export default function Game(props) {
  const { id } = useParams();
  const token = props.token;
  const reviewPath = useHref(`/addReview/${id}`);
  const collectionPath = useHref(`/myCollection`);
  const loginPath = useHref(`/login`);
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [sameGames, setSameGames] = useState([]);
  const [myCollection, setMyCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gamesInMyCollection, setGamesInMyCollection] = useState([]);
  const navigate = useNavigate();

  const gameInMyCollection = async () => {
    const response = await client.get("/myCollection", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const tab = response.data.map((game) => {
      return game.id;
    });

    setGamesInMyCollection(tab);
  };
  console.log(typeof id);

  const removeGame = async () => {
    await client.post(
      "/deleteToMyCollection",
      {
        id: parseInt(id),
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    navigate("/myCollection");
  };

  const addGameToCollection = async () => {
    const response = await client.post(
      "/addToMyCollection",
      {
        gameId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setMyCollection(response.data);
    navigate(collectionPath);
  };

  const fetchReviews = async () => {
    const response = await client.get(`/reviews/${id}/`);
    setReviews(response.data);
  };

  const fetchGamesSuggested = async () => {
    const response = await client.get(`/games/${id}/suggested`);
    setSameGames(response.data.games);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get(`/game/${id}`);
      setData(response.data.game);
      setIsLoading(false);
    };
    fetchData();
    fetchGamesSuggested();
    fetchReviews();
    gameInMyCollection();
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
          {token ? (
            <div className="btns">
              {gamesInMyCollection.includes(parseInt(id)) ? (
                <button onClick={removeGame} className="btn-game-page">
                  Remove to Collection
                  <FontAwesomeIcon
                    className="icon-list fa-xl"
                    icon="fa-regular fa-bookmark"
                  />
                </button>
              ) : (
                <button onClick={addGameToCollection} className="btn-game-page">
                  Save to <span className="green">Collection</span>
                  <FontAwesomeIcon
                    className="icon-list fa-xl"
                    icon="fa-regular fa-bookmark"
                  />
                </button>
              )}
              <a href={reviewPath} className="btn-game-page">
                Add a review
                <FontAwesomeIcon
                  className="icon-list fa-xl"
                  icon=" fa-regular fa-message"
                />
              </a>
            </div>
          ) : (
            <div className="btns">
              <a href={loginPath} className="btn-game-page">
                Save to Collection
                <FontAwesomeIcon
                  className="icon-list fa-xl"
                  icon="fa-regular fa-bookmark"
                />
              </a>
              <a href={loginPath} className="btn-game-page" disabled>
                Add a review
                <FontAwesomeIcon
                  className="icon-list fa-xl"
                  icon=" fa-regular fa-message"
                />
              </a>
            </div>
          )}

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
          <span className="sub-text">{reviews.length}</span>
          {reviews.map((review, index) => {
            return (
              <ReviewsCard
                key={index}
                title={review.title}
                comment={review.comment}
                userPicture={review.user.picture_url}
                date={review.createdAt}
                username={review.user.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
