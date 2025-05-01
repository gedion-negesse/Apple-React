import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap.css";
import "./css/styles.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Apple-React">
      <App />
    </BrowserRouter>
  </StrictMode>
);
