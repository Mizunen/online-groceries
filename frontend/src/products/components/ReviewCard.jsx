import React, { useState } from "react";
import StarRating from "./StarRating";

const ReviewCard = (props) => {
  console.log("review is");
  console.log(props.review.review);
  const { review } = props;
  let substring = "";
  const [readMore, setReadMore] = useState(false);
  let content = null;
  const handleReadMore = (event) => {
    setReadMore((prevState) => {
      return !prevState;
    });
  };
  if (review.review.length > 180 && !readMore) {
    substring = review.review.substring(0, 160);
    content = (
      <p>
        {substring}...
        <span
          onClick={handleReadMore}
          className="decoration-solid text-green cursor-pointer underline"
        >
          Read More
        </span>
      </p>
    );
  } else {
    content = (
      <p>
        {review.review}
        {readMore && (
          <span
            onClick={handleReadMore}
            className="decoration-solid text-green cursor-pointer underline"
          >
            Show Less
          </span>
        )}
      </p>
    );
  }
  return (
    <section
      id="review-card"
      className="border-2 rounded border-cardBorderGrey mt-[1.5rem] p-2"
    >
      <StarRating value={review.numStars} />
      <p>{review.title}</p>
      <p>
        {review.creator} {review.date}
      </p>
      <p>{content}</p>
    </section>
  );
};

export default ReviewCard;
