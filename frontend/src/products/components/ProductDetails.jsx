import React, { useState } from "react";
// p-[1rem]
import ImageList from "./ImageList";
import heartIcon from "../../Shared/assets/icons/heart.svg";
import addIcon from "../../Shared/assets/icons/add-icon.svg";
import removeIcon from "../../Shared/assets/icons/subtract-icon.svg";
import DetailsContainer from "./DetailsContainer";
import styles from "./ProductDetails.module.css";
import ImageBackdrop from "../../Shared/assets/images/image-backdrop.jpg";
import { drawEllipsePath } from "pdf-lib";
import NutritionalFacts from "../../Shared/components/UIElements/NutritionalFacts";
/////////////////////////////////////////////
////Show Product Details as its own page////
///////////////////////////////////////////

///////////////////////////////
////////////TO DO/////////////
/////////////////////////////
/////////////////////////////////////////////////////////////////
////1. Add Cart Context/////////////////////////////////////////
////2. Update Unit Change function to add or remove from cart////////////
////3. Add Product details and animations for the detail box enlarging//
////4. Add Review section//////////////////////////////////////////////
const ProductDetails = (props) => {
  const { product } = props;
  const [units, setUnits] = useState(0);
  const handleUnitChange = (event) => {
    switch (event.target.id) {
      case "add":
      case "add-icon":
        console.log("adding");
        setUnits((prevState) => {
          console.log(prevState);
          return prevState + 1;
        });
        break;
      case "remove":
      case "remove-icon":
        console.log("subtracting");

        setUnits((prevState) => {
          if (prevState !== 0) {
            return prevState - 1;
          } else {
            return prevState;
          }
        });
        break;
      default:
        console.log(event.target.id);
        setUnits(event.target.value);
    }
  };

  console.log(units);
  console.log(product);
  let images = [product.image, product.image];
  return (
    <>
      <ImageList images={images} />
      {/* <figure className=" h-[20rem] w-full  tablet:[w-35rem] rounded-b-[1.25rem] overflow-hidden flex justify-center bg-searchBarGrey ">
        <img
          className="h-full w-full rounded-b-xl bg-searchbarGrey"
          src={product.image}
        />
      </figure> */}
      <section className="px-[1rem]">
        <section className="flex justify-between w-full tablet:w-[35rem] p-[1rem]">
          <div>
            <p className="text-2xl">{product.name}</p>
            <p>per {product.unit.name}</p>
          </div>
          <button className="p-0">
            <img src={heartIcon} alt="favorite icon" />
          </button>
        </section>
        <section className="flex justify-between p-[1rem]">
          <div className="flex items-center">
            <button className="p-2" onClick={handleUnitChange}>
              <figure id="remove" className="w-[3rem] flex justify-center">
                <img
                  id={"remove-icon"}
                  src={removeIcon}
                  alt="subtraction symbol"
                />
              </figure>
            </button>

            <input
              className="w-[3rem] h-[3rem] p-[0.5rem] border-2 rounded-lg border-cardBorderGrey text-center"
              type="number"
              value={units}
              onChange={handleUnitChange}
              min={0}
            />
            <button className="p-2" onClick={handleUnitChange}>
              <figure id="add" className="w-[3rem] flex justify-center">
                <img id="add-icon" src={addIcon} alt="addition symbol" />
              </figure>
            </button>

            <p>{product.price}</p>
          </div>
        </section>
        <DetailsContainer title="Product Details" details={product.details} />

        <DetailsContainer
          title="Nutrition"
          details={
            //product.details
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          type="nutrition"
          unit={product.unit.name}
        />
        <DetailsContainer
          title="Reviews"
          type="review"
          reviewData={product.reviewData}
          // reviews={product.reviewData.reviews}
          // averageStarRating={product.reviewData.averageStarRating}
        />
      </section>
    </>
  );
};

export default ProductDetails;
