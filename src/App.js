import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PropertyListing } from "./Pages/PropertyListing/PropertyListing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PropertyListing />} />
      </Routes>
    </div>
  );
}

export default App;
