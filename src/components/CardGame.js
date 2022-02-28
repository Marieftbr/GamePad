import React from "react";

export default function CardGame(props) {
  return (
    <div className="game-card-container">
      {props.games.map((game, index) => {
        return (
          <div key={index} className="game-card">
            <img className="game-card-image" src={game.image} />
            <h1 className="game-card-text">{game.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
