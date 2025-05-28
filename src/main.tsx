import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import photos from "./photos.json";
import "./index.css";
import { Gallery } from "./Gallery";
import SQLProjects from "./SQLProjects";
import { ThemeProvider } from "@/components/ui/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/gallery" element={<Gallery photos={photos} />} />
            <Route path="/sql-projects" element={<SQLProjects />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
