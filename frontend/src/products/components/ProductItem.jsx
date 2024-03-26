import React from "react";
import styles from "./ProductItem.module.css";
import { NavLink } from "react-router-dom";

import Button from "../../Shared/components/FormElements/Button";
import Card from "../../Shared/components/UIElements/Card";
import plusIcon from "../../Shared/assets/icons/addIcon.svg";

/////////////////////////////////////////////////////////////////
//// Displays Product Item in ProductList or ProductSwiper//////
///////////////////////////////////////////////////////////////
const ProductItem = (props) => {
  const { product } = props;
  const addToCartHandler = (event) => {
    console.log("adding " + product.name + " to cart.");
  };
  return (
    // <li key={product.name} className="mr-[1rem]">laptop:h-[20rem] laptop:w-[12.8rem]

    <Card
      classes={` border-cardBorderGrey
       `}
      key={product.id}
    >
      <NavLink to={`/products/${product.id}`}>
        <figure className="w-[8rem] mt-[1rem] tablet:w-[8.5rem]">
          <img src={product.image} />
        </figure>
        <div className="flex flex-col mt-[1rem]">
          <p className="font-semibold tablet:text-lg">{product.name}</p>
          <p className="text-xs text-textGrey">per {product.unit.name}</p>
        </div>
      </NavLink>
      <div className="w-[8rem] flex justify-between items-center mt-[1rem] absolute bottom-[1.25rem]">
        <p className="font-semibold">${product.price}</p>
        <Button onClick={addToCartHandler}>
          <img src={plusIcon} alt="add icon" />
        </Button>
      </div>
    </Card>

    // </li>
  );
};

export default ProductItem;
