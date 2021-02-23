import logo from "./logo.svg";
//import "./App.css";
//import "./App.sass";
import Navbar from "./components/Navbar/index.js";
import Welcome from "./components/Welcome/index.js";
import Home from "./components/Home/index.js";
import WelcomeTest from "./components/WelcomeTest/index.js";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeTest />
      <Home />
    </>
  );
}

export default App;
