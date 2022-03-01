import React from "react";

export default function GamePadSelect(props) {
  return (
    <span>
      <label>{props.label}</label>
      <select value={props.value} onChange={props.onChange}>
        <option value="">{props.defaultValue || "All"}</option>
        {props.items.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </span>
  );
}
