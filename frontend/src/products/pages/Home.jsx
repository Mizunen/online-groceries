import React from "react";
import { useQuery } from "@tanstack/react-query";

import Searchbar from "../../Shared/components/Util/Searchbar";
import ProductSwiper from "../components/ProductSwiper";

import appleImage from "../../Shared/assets/images/apples.png";
import { fetchProducts } from "../../util/http";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Cosmic Apples",
    details: "The best type of apple.",
    price: "4.99",
    unit: "lb",
    image:
      "https://cosmiccrisp.com/wp-content/uploads/2022/09/cosmic-crisp-featured-img.jpg",
    reviews: [
      { creator: "u1", review: "Best apple money can buy.", product: "p1" },
    ],
  },
  {
    id: "p2",
    name: "Normal Apples",
    details: "ok type of apple.",
    price: "2.99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Okayest apple money can buy.", product: "p2" },
    ],
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Worst apple money can buy.", product: "p3" },
    ],
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Worst apple money can buy.", product: "p3" },
    ],
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Worst apple money can buy.", product: "p3" },
    ],
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Worst apple money can buy.", product: "p3" },
    ],
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Worst apple money can buy.", product: "p3" },
    ],
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Worst apple money can buy.", product: "p3" },
    ],
  },
  {
    id: "p3",
    name: "Red Delicious Apples",
    details: "Worst type of apple.",
    price: ".99",
    unit: "lb",
    image: appleImage,
    reviews: [
      { creator: "u1", review: "Worst apple money can buy.", product: "p3" },
    ],
  },
];

const HomePage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => {
      return fetchProducts({ signal });
    },
    staleTime: 100000,
  });
  return (
    <>
      <Searchbar containerClasses="w-full mx-auto flex justify-center mt-[2rem] " />

      <ProductSwiper category="deals" link="deals" products={DUMMY_PRODUCTS} />

      <ProductSwiper
        category="best selling"
        link="best-selling"
        products={DUMMY_PRODUCTS}
      />
      <ProductSwiper
        category="groceries"
        link="groceries"
        products={DUMMY_PRODUCTS}
      />
    </>
  );
};

export default HomePage;
