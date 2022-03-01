import React from "react";
import GamePadSelect from "./GamePadSelect";

export default function SortSelect(props) {
  const items = [
    { name: "Name", id: "name" },
    { name: "Release date", id: "released" },
    { name: "Added Date", id: "added" },
    { name: "Creation Date", id: "created" },
    { name: "Modification Date", id: "updated" },
    { name: "Rating", id: "-rating" },
    { name: "Metacritic", id: "-metacritic" },
  ];

  return (
    <span>
      <GamePadSelect
        label="Sort by:"
        defaultValue="Default"
        items={items}
        value={props.value}
        onChange={props.onChange}
      />
    </span>
  );
}
