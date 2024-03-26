import React, { useState } from "react";

import StarRating from "../../Shared/components/FormElements/StarRating";

import detailsIcon from "../../Shared/assets/icons/details-icon.svg";
import styles from "./DetailsContainer.module.css";
import NutritionalFacts from "../../Shared/components/UIElements/NutritionalFacts";

const DetailsContainer = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const showDetailsHandler = (event) => {
    // Show details and rotate icon
    setShowDetails((prevState) => {
      return setShowDetails(!prevState);
    });
  };
  console.log("reviews in details container is");
  console.log(props.reviews);
  return (
    <section className="w-[20rem]">
      <details className="h-auto">
        <summary
          className="flex justify-between h-[1.5rem]"
          onClick={showDetailsHandler}
        >
          <p>{props.title}</p>
          <div className="flex h-[1rem] items-center">
            {props.type === "nutrition" && (
              <p className="w-[2rem] mr-[0.75rem] p-[0.25rem] bg-cardBorderGrey text-textGrey text-center text-[0.65rem] rounded-md">
                {props.unit.numUnits} {props.unit.name}
              </p>
            )}
            {props.type === "review" && (
              <p className="mr-[0.75rem]">{props.starRating}</p>
            )}
            <figure className="h-[0.75rem]">
              <img className="h-full" src={detailsIcon} alt="details icon" />
            </figure>
          </div>
        </summary>
        {props.type !== "review" && props.type !== "nutrition" && (
          <p>{props.details}</p>
        )}
        {props.type === "nutrition" && <NutritionalFacts />}
        {props.type === "review" &&
          props.reviews.map((review) => {
            return;
          })}
      </details>
    </section>
  );
};

export default DetailsContainer;
