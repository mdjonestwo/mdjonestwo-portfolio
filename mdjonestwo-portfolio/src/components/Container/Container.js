import { useContext } from "react";
import colorContext from "../../context/colorContext";
import Navbar from "../Navbar/index";
import WelcomeTest from "../WelcomeTest";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Contact from "../Contact";

function Container() {
  const theme = useContext(colorContext);

  return (
    <>
      <div style={{ backgroundColor: theme }}>
        <Navbar />
        <WelcomeTest />
        <About />
        <Home />
        <Skills />
        <Contact />
      </div>
      ;
    </>
  );
}

export default Container;
