import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

/////////////////////////
////React Query setup///
///////////////////////

///////////////////////
////Product Requests//
/////////////////////

export const fetchProducts = async ({ signal }) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/products"
    );

    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProductsByCategory = async ({ signal, category }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/products/category/${category}`
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error("failed to get products");
    }

    const parsedData = JSON.parse(responseData.products);
    return parsedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProductById = async ({ signal, pid }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/products/${pid}`
    );
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      throw new Error("Failed to fetch product!");
    }
    let parsedData = JSON.parse(responseData.product);
    return parsedData[0];
  } catch (err) {
    console.log(err);
  }
};

//////////////////////
////Cart Requests////
////////////////////

export const fetchCartData = async ({ id }) => {
  try {
    const response = fetch(process.env.REACT_APP_BACKEND_URL + "/users/");
  } catch (err) {}
};
