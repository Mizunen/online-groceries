import React from "react";
import StarRating from "./StarRating";
import ReviewCard from "./ReviewCard";
import StarGraph from "./StarGraph";
import { current } from "@reduxjs/toolkit";
const ReviewsSection = (props) => {
  const { averageStarRating, reviews, totalStars } = props.reviewData;
  return (
    <>
      <section id="reviews ">
        <p className="text-sm">Average Customer Rating</p>
        <p className="flex items-center">
          <span className="pr-2">{averageStarRating}</span>
          <StarRating value={averageStarRating} totalStars={totalStars.total} />
          <span className="text-xs">({totalStars.total})</span>
        </p>
        {Object.keys(totalStars)
          .reverse()
          .map((currentStar, index) => {
            if (currentStar !== "total") {
              return <StarGraph totalStars={totalStars} rating={currentStar} />;
            }
          })}
        <StarGraph totalStars={totalStars} rating={5} />
        {reviews.map((review) => {
          return <ReviewCard review={review} />;
        })}
      </section>
    </>
  );
};

export default ReviewsSection;
