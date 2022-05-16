import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import "./index.css"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
