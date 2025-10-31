import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TestimonialsSection } from "./screens/TestimonialsSection";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <TestimonialsSection />
  </StrictMode>,
);
