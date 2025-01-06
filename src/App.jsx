import React from 'react'

import "./App.css";
import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav"
import Users from "./pages/Users"

function App() {
  return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </>
  );
}

export default App;
