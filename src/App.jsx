import React from 'react'

import "./App.css";
import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Nav from "./components/Nav"
import Users from "./pages/Users"

function App() {
  return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:name" element={<Users />} />
        </Routes>
      </>
  );
}

export default App;
