import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hacking from "./components/Hacker/Hacking";
import Welcome from "./components/Welcome/Welcome";
import Riddles from "./components/Riddles/Riddles";
import Congrats from "./components/Congrats/Congrats";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/intrusion",
    element: <Hacking />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/riddles",
    element: <Riddles />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/congrats",
    element: <Congrats />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
