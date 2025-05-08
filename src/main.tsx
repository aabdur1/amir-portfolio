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
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC6718.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC7046.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC6010.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC5998.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC6029.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC4554-HDR.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/_DSC7366.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09056-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/DSC09103-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00845-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00790-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00757-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00837-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00806-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00839-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00829-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00787-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00847-Edit.jpg",
  "https://amirabdurrahim-photos.s3.us-east-2.amazonaws.com/20250507-DSC00795-Edit.jpg",
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
