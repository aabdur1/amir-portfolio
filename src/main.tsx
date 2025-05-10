import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import photos from "./photos.json";
import "./index.css";
import { Gallery } from "./Gallery";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery photos={photos} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
