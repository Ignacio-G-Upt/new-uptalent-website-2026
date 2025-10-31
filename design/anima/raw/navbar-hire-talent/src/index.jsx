import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavbarHireTalent } from "./screens/NavbarHireTalent";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <NavbarHireTalent />
  </StrictMode>,
);
