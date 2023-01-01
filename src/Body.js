import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Syllablee from "./pages/Syllablee";
import Gogo from "./pages/Gogo";
import Kuplace from "./pages/Kuplace";
import People from "./pages/People";
import Firsthome from "./pages/Firsthome";
import Lasthome from "./pages/Lasthome";

export default function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firsthome />} />
        <Route path="*" element={<Firsthome />} />
        <Route path="/home" element={<Home />} />
        
        
        <Route path="/syllablee" element={<Syllablee />} />
        <Route path="/gogo" element={<Gogo />} />
        <Route path="/kuplace" element={<Kuplace />} />
        <Route path="/people" element={<People />} />
        <Route path="/lasthome" element={<Lasthome />} />
      </Routes>
    </>
  );
}
