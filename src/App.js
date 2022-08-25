import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { PropertyListing } from "./Pages/PropertyListing/PropertyListing";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<PropertyListing />} />
      </Routes>
    </div>
  );
}

export default App;
