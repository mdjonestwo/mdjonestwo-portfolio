import logo from "./logo.svg";
import React, { useState } from "react";
//import "./App.css";
//import "./App.sass";
import Navbar from "./components/Navbar/index.js";
import Welcome from "./components/Welcome/index.js";
import Home from "./components/Home/index.js";
import WelcomeTest from "./components/WelcomeTest/index.js";
import Container from "./components/Container/Container";
import colorContext from "./context/colorContext";

function App() {
  const [theme, setTheme] = useState({ blue: "black" });

  return (
    <>
      <colorContext.Provider value={theme.blue}>
        <Container />
      </colorContext.Provider>
    </>
  );
}

export default App;
