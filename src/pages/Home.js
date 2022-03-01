import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";
import CardGame from "../components/CardGame";
import GamepadLogo from "../img/gampad-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlatformSelect from "../components/PlatformSelect";
import GenreSelect from "../components/GenreSelect";
import client from "../api";

export default function Home() {
  const [games, setGames] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const fetchListGames = async () => {
    const query = {};

    if (search) {
      query.search = search;
    }
    if (selectedPlatform) {
      query.platforms = selectedPlatform;
    }
    if (selectedGenre) {
      query.genres = selectedGenre;
    }

    const response = await client.get("/games", {
      params: query
    });
    setGames(response.data.games);
    setTotal(response.data.total);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchListGames();
  }, [search, selectedPlatform, selectedGenre]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <div className="filter-part">
        <div className="logo-container">
          <img className="logo-img" src={GamepadLogo} alt="logo" />
          <h1 className="big-logo">Gamepad</h1>
        </div>
        <div className="search-input">
          <FontAwesomeIcon
            className="loupe"
            icon="fa-solid fa-magnifying-glass"
          />
          <input
            className="home-input"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        {search ? (
          <div>
            <div>
              <p className="undeline-text">search result for "{search}"</p>
              <p className="undeline-text">{total} games</p>
            </div>
            <div>
              <PlatformSelect
                value={selectedPlatform}
                onChange={(event) => {
                  setSelectedPlatform(event.target.value);
                }}
              />
              <GenreSelect
                value={selectedGenre}
                onChange={(event) => {
                  setSelectedGenre(event.target.value);
                }}
              />
            </div>
          </div>
        ) : (
          <p className="undeline-text">search {total} games</p>
        )}
      </div>
      <div className="game-card-container">
        {games.map((game, index) => {
          return <CardGame key={index} game={game} />;
        })}
      </div>
    </div>
  );
}
