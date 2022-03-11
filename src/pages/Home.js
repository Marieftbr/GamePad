import React from "react";
import { useState, useEffect } from "react";
import CardGame from "../components/CardGame";
import GamepadLogo from "../img/gampad-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlatformSelect from "../components/PlatformSelect";
import GenreSelect from "../components/GenreSelect";
import client from "../api";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import SortSelect from "../components/SortSelect";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(
    searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
  );
  const [ordering, setOrdering] = useState(searchParams.get("ordering") || "");
  const [selectedPlatform, setSelectedPlatform] = useState(
    searchParams.get("platforms") || ""
  );
  const [selectedGenre, setSelectedGenre] = useState(
    searchParams.get("genre") || ""
  );

  const fetchListGames = async () => {
    setIsLoading(true);
    const query = { page };

    if (search) {
      query.search = search;
    }
    if (selectedPlatform) {
      query.platforms = selectedPlatform;
    }
    if (selectedGenre) {
      query.genres = selectedGenre;
    }
    if (ordering) {
      query.ordering = ordering;
    }

    setSearchParams(query);

    const response = await client.get("/games", {
      params: query,
    });
    setGames(response.data.games);
    setTotal(response.data.total);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchListGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  return (
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
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
          />
        </div>
        {search ? (
          <div className="full-width">
            <div>
              <p className="text-game-result">
                search result for "
                <span className="italic-search underline-red">{search}</span> "
              </p>
              <p className="total-search">{total} games</p>
            </div>
            <div className="btn-wrapper">
              <div className="btn-left">
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
              <div className="btn-right">
                <SortSelect
                  value={ordering}
                  onChange={(event) => {
                    setOrdering(event.target.value);
                  }}
                />
                <button
                  onClick={() => fetchListGames()}
                  className="filters-btn"
                >
                  GO Filters
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="undeline-text">search {total} games</p>
        )}
      </div>
      {isLoading ? (
        <div>En cours de chargement...</div>
      ) : (
        <div>
          <div className="game-card-container">
            {games.map((game, index) => {
              return <CardGame game={game} key={index} />;
            })}
            <Pagination
              page={page}
              setPage={setPage}
              lastPage={Math.ceil(total / 20)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
