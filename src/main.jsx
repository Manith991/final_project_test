import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // Fixed import

import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import { LoginComponent } from "./components/AuthComponents/LoginComponent";
import { SignupComponent } from "./components/AuthComponents/SignupComponent";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage"; // You'll need to create this
import App from "./App";

import { Provider } from 'react-redux'
import { store } from "./redux/store";
import DetailProductPage from "./pages/DetailProductPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Using element consistently
  },
  {
    path: "/about",
    element: <AboutPage />, // Create an AboutPage component
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
    {
    path: "detail/:id",
    element: <DetailProductPage/>,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginComponent />,
      },
      {
        path: "signup",
        element: <SignupComponent />,
      }
    ]
  },

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
        
      <RouterProvider router={router} />    
    </Provider>
  </React.StrictMode>
);