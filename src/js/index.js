//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./pages/Home.jsx";
import EventsForm from "./pages/EventsForm.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<p>Login</p>} />
      <Route path="/eventos/crear" element={<EventsForm />} />
    </Routes>
  </BrowserRouter>
);
