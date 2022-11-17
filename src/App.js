import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <NavBar />
        <div></div>
      </div>
    </div>
  );
}

export default App;
