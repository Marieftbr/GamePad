import React from "react";
import GamePadSelect from "./GamePadSelect";
import { useState, useEffect } from "react";
import client from "../api";

export default function PlatformSelect(props) {
  const [platforms, setPlatforms] = useState([]);

  const fetchListPlatforms = async () => {
    const response = await client.get("/platforms");
    setPlatforms(response.data.platforms);
  };

  useEffect(() => {
    fetchListPlatforms();
  }, []);

  return (
    <GamePadSelect
      label="Platform:"
      items={platforms}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
