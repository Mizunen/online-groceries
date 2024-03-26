import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductList from "../components/ProductList";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "../../util/http";
const ProductCategoryPage = (props) => {
  const [products, setProducts] = useState([]);
  let { category } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: [category],
    queryFn: ({ signal }) => {
      return fetchProductsByCategory({ signal, category });
    },
    staleTime: 10000,
  });
  // useEffect(() => {
  //   console.log("useEffect is running");

  //   const getProducts = async () => {

  //     try {

  //       const response = await fetch(
  //         `http://localhost:5000/api/products/category/${category}`
  //       );
  //       const responseData = await response.json();

  //       if (!response.ok) {
  //         throw new Error("failed to get products");
  //       }
  //       setProducts(JSON.parse(responseData.products));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProducts();
  // }, []);
  // console.log("products is ");
  // console.log(products);
  console.log("isPending is");
  console.log(isPending);
  if (isPending) {
    return <LoadingSpinner asOverlay />;
  }

  if (isError) {
    console.log(error);
  }
  if (data) {
    console.log("data is ");
    console.log(data);

    return (
      <>
        {data && <ProductList category={category} products={data} />}

        {/* {!products && <LoadingSpinner asOverlay />} */}
      </>
    );
  }
};

export default ProductCategoryPage;
