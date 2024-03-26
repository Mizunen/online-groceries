import React, { useState } from "react";

import styles from "./StarRating.module.css";
/////////////////////////////////
////Create Star rating input////
///////////////////////////////

const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); //style buttons up to hover index
  const ratingHandler = (event) => {
    console.log(event.target.key);
    setRating(event.target.key);
  };

  const mouseEnterHandler = (event) => {
    console.log(event);
    setHover(event.target.key);
  };
  return (
    <div className={styles["star-rating"]}>
      {[
        ...Array(5).map((star, index) => {
          // creates an array with an index of 5 and makes a button for each
          index += 1;
          return (
            <button
              disabled={props.disabled}
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"} // if index is less than or equal to hovered value style it as on
              onClick={ratingHandler}
            >
              <span className={styles.star}>&#9733;</span>
            </button>
          );
        }),
      ]}
    </div>
  );
};

export default StarRating;
