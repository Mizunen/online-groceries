import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import ProductDetails from "../components/ProductDetails";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../util/http";
const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", pid],
    queryFn: ({ signal }) => {
      return fetchProductById({ signal, pid });
    },
  });
  console.log("id is");
  console.log(pid);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5000/api/products/${pid}`
  //       );
  //       const responseData = await response.json();
  //       console.log(responseData);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch product!");
  //       }
  //       let parsedData = JSON.parse(responseData.product);
  //       setProduct(parsedData[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProduct();
  // }, []);
  console.log("product is ");
  console.log(product);
  return (
    <>
      {isPending && <LoadingSpinner />}
      {data && <ProductDetails product={data} />}
    </>
  );
};

export default ProductDetailsPage;
