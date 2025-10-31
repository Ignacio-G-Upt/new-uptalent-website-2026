import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavbarResources } from "./screens/NavbarResources";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <NavbarResources />
  </StrictMode>,
);
