import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
