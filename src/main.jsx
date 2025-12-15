import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { router } from "@/routes";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>
);
