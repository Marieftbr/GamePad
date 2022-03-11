import React from "react";

export default function ReviewsCard(props) {
  return (
    <div className="margin">
      <div className="review-card">
        <h4 className="review-title">{props.title}</h4>
        <p className="review-comment">{props.comment}</p>
        <div className="user-infos">
          <img
            className="review-profile-picture"
            src={props.userPicture}
            alt="profile user"
          />
          <div className="column">
            <p className="review-date">{props.date}</p>
            <p className="review-username">{props.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
