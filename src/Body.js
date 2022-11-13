import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Syllablee from "./pages/Syllablee";
import Gogo from "./pages/Gogo";
import Kuplace from "./pages/Kuplace";
import People from "./pages/People";

export default function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/syllablee" element={<Syllablee />} />
        <Route path="/gogo" element={<Gogo />} />
        <Route path="/kuplace" element={<Kuplace />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </>
  );
}
