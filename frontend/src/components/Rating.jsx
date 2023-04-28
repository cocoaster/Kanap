import React from "react";
import Star from "./Star";

function Rating(props) {
  const { rating } = props;

  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => {
        const starColor = i < rating ? "#ff6060" : "#e3e3e3";
        return (
          <span className="stars" key={i} style={{ color: starColor }}>
            <Star color={starColor} />
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
