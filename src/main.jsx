import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

const basename =
  import.meta.env.PROD ? "/dist" : "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);