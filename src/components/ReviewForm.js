import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../api";

export default function ReviewForm(props) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const sendData = () => {
    return client.post(
      "/review/create",
      {
        title,
        comment,
        gameId: parseInt(props.gameId),
      },
      {
        headers: {
          authorization: `Bearer ${props.token}`,
        },
      }
    );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendData();
    navigate({ pathname: `/game/${props.gameId}` });
  };

  return (
    <div>
      <h1 className="title-page-review">Add Review</h1>
      <form className="form-review-container" onSubmit={handleSubmit}>
        <h2>Write a Review</h2>
        <div className="form-review">
          <div className="review-input-title">
            <label className="review-label">Review title</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="review-input-comment">
            <label className="review-label">Review text</label>
            <textarea
              type="text"
              rows={3}
              cols={3}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <div className="review-form-btn">
            <button className="filters-btn" type="submit">
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
