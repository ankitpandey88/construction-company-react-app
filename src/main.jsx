import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/Home.jsx";
import AboutTab from "./layouts/AboutTab.jsx";
import ServicesTab from "./layouts/ServicesTab.jsx";
import ContactTab from "./layouts/ContactTab.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutTab /> },
      { path: "/services", element: <ServicesTab /> },
      { path: "/contact", element: <ContactTab /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
