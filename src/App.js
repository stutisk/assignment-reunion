import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Favorities } from "./Pages/Favorities/Favorities";
import { Mainpage } from "./Pages/Mainpage/Mainpage";
import { PropertyListing } from "./Pages/PropertyListing/PropertyListing";
import { SinglePage } from "./Pages/SinglePage/SinglePage";

function App() {
  return (
    <div className="App">


      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/rent" element={<PropertyListing />} />
        <Route path="/favorities" element={<Favorities />} />
        <Route path="/property/:title" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
