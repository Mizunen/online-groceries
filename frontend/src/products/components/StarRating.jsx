import React from "react";
import emptyStar from "../../Shared/assets/icons/empty-star.svg";
import filledStar from "../../Shared/assets/icons/filled-star.svg";
const StarRating = (props) => {
  let numStars = Math.floor(props.value);
  console.log("value in starRating is ");
  console.log(numStars);
  let numEmpty = 5 - numStars;
  let stars = [];
  // create array of stars
  for (let i = 0; i < numStars; i++) {
    stars.push("filled");
  }
  if (numEmpty !== 0) {
    for (let i = 0; i < numEmpty; i++) {
      stars.push("empty");
    }
  }
  return (
    <figure className="flex ">
      {stars.map((star, index) => {
        return (
          <img
            src={star === "filled" ? filledStar : emptyStar}
            alt={`${star} star ${index}`}
          />
        );
      })}
    </figure>
  );
};

export default StarRating;
