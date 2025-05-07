import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Gallery } from "./Gallery";

const photos = [
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4596-HDR-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC08611.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC08612.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC08629.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09037-Edit-Edit-2.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09041-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09048-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09060-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09063-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09068-Edit-2.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09078-Edit-Edit-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC08271.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC7026-HDR.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC08688.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC00520-Enhanced-NR-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC00560-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/chicagosnow.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/Mealtime_Original.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC02329_Original.jpg",
  // more URLs
];

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
