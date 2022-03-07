import React from "react";
import { Link } from "react-router-dom";

export default function CardGame(props) {
  const game = props.game;
  return (
    <Link to={`/game/${game.id}`} className="game-card">
      <img className="game-card-image" src={game.background_image} alt="game" />
      <h1 className="game-card-text">{game.name}</h1>
    </Link>
  );
}
