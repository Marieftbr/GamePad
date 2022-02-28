import React from "react";
// import axios from "axios";
import { useState, useEffect } from "react";
import HorizonImg from "../img/HorizonForbiddenWest.jpg";
import CardGame from "../components/CardGame";
import GamepadLogo from "../img/gampad-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const games = [
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
  {
    title: "Horizon Forbidden West",
    studio: "Guerrilla Games",
    plateform: ["Playstation4", "Playstation5"],
    genre: ["Action", "Adventure"],
    image: HorizonImg,
  },
];

export default function Home() {
  //   const [games, setGames] = useState("");
  //   const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  //   const getListGames = () => {};
  //   getListGames();

  //   console.log(games);
  return (
    <div>
      <div className="filter-part">
        <div className="logo-container">
          <img className="logo-img" src={GamepadLogo} />
          <h1 className="big-logo">Gamepad</h1>
        </div>
        <FontAwesomeIcon
          className="loupe"
          icon="fa-solid fa-magnifying-glass"
        />
        <input
          className="home-input"
          type="text"
          onChange={() => setSearch(event.target)}
        />
        <p className="undeline-text">search 12 344 games</p>
      </div>
      <CardGame games={games} />
    </div>
  );
}
