import React from "react";
import ReviewForm from "../components/ReviewForm";
import { useParams } from "react-router-dom";

export default function Review(props) {
  const { id } = useParams();

  return (
    <div>
      <ReviewForm token={props.token} gameId={id} />
    </div>
  );
}
