import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as BrowerRouter } from "react-router-dom";
import Provider from "./store/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowerRouter>
      <Provider>
        <App />
      </Provider>
    </BrowerRouter>
  </StrictMode>
);
