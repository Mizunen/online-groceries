import React from "react";
import styles from "./StarGraph.module.css";

import filledStar from "../../Shared/assets/icons/filled-star.svg";
const StarGraph = (props) => {
  const { totalStars, rating } = props;
  console.log("totalStars is");
  console.log(totalStars);
  console.log("rating is ");
  console.log(rating);
  console.log("rating total is ");
  console.log(totalStars[rating]);
  let width = Math.round((totalStars[rating] / totalStars.total) * 100) + "%";
  console.log("width is ");
  console.log(width);
  return (
    <div id="star-graph__container" className="flex items-center mb-2 ml-2">
      <p className="flex items-center text-xs ">
        {rating}
        <img className="ml-1" src={filledStar} alt="filled star" />
      </p>
      <div
        id={`star-graph-${rating}`}
        className={`w-[18rem] h-[10px] rounded-[4rem] overflow-hidden relative mx-1`}
      >
        <div
          id={`star-graph-${rating}__inner`}
          className="w-full h-[10px]  bg-orange opacity-30 relative"
        ></div>
        <div
          id={`star-graph-${rating}__fill`}
          className={` h-[10px] bg-green absolute top-0 rounded`}
          style={{ width: width }} //need to set width here because tailwind doesn't like dynamic variables in []
        ></div>
      </div>
      <p className="text-xs flex items-center">({totalStars[rating]})</p>
    </div>
  );
};

export default StarGraph;
