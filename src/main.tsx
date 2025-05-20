import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import photos from "./photos.json";
import "./index.css";
import { Gallery } from "./Gallery";
import SQLProjects from "./SQLProjects";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery photos={photos} />} />
        <Route path="/sql-projects" element={<SQLProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
