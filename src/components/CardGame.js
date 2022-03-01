import React from "react";

export default function CardGame(props) {
  const game = props.game;
  return (
    <div className="game-card">
      <img className="game-card-image" src={game.background_image} alt="game" />
      <h1 className="game-card-text">{game.name}</h1>
    </div>
  );
}
