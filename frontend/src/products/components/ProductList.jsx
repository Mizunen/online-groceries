import React from "react";

import Card from "../../Shared/components/UIElements/Card";
import ProductItem from "./ProductItem";
////////////////////////////////////////////////////////
////Component for displaying products in a grid format////
////////////////////////////////////////////////////////
const ProductList = (props) => {
  console.log("products are");
  console.log(props.products);
  return (
    <>
      {props.category && (
        <h2 className="capitalize font-semibold text-center text-2xl">
          {props.category}
        </h2>
      )}
      <section classes="grid grid-cols-2 grid-flow-row pl-[2rem] mb-[4rem]">
        {props.products.map((product) => {
          return <ProductItem product={product} />;
        })}
      </section>
    </>
  );
};

export default ProductList;
