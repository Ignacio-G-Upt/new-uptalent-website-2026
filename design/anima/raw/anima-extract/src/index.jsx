import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingMarketers } from "./screens/LandingMarketers";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LandingMarketers />
  </StrictMode>,
);
