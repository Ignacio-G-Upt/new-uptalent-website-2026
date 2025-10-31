import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./screens/Button";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Button />
  </StrictMode>,
);
