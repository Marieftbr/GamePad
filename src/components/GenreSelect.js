import React from "react";
import GamePadSelect from "./GamePadSelect";
import { useState, useEffect } from "react";
import client from "../api";

export default function GenreSelect(props) {
  const [genres, setGenres] = useState([]);

  const fetchListGenres = async () => {
    const response = await client.get("/genres");
    setGenres(response.data.genres);
  };

  useEffect(() => {
    fetchListGenres();
  }, []);

  return (
    <GamePadSelect
      label="Genres:"
      items={genres}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
