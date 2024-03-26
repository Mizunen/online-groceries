import logo from "./logo.svg";
import "./App.css";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";

import RootLayout from "./Shared/pages/RootLayout";
import UserAccountPage from "./User/pages/User";
import HomePage from "./products/pages/Home";
import ProductDetailsPage from "./products/pages/ProductDetails";
import ProductCategoryPage from "./products/pages/ProductCategory";
import ExplorePage from "./products/pages/Explore";
import SearchPage from "./products/pages/Search";
import AuthPage from "./User/pages/Auth";
import UserFavoritesPage from "./User/pages/UserFavorites";
import AdminPage from "./admin/pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        children: [
          { index: true, element: <HomePage /> },
          { path: "explore", element: <ExplorePage /> },
          { path: "search/:searchTerm", element: <SearchPage /> },
          { path: "category/:category", element: <ProductCategoryPage /> },
          { path: "favorites/:uid", element: <UserFavoritesPage /> },
          { path: ":pid", element: <ProductDetailsPage /> },
        ],
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
      { path: "user/:uid", element: <UserAccountPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
