import { useContext } from "react";
import colorContext from "../../context/colorContext";
import Navbar from "../Navbar/index";
import WelcomeTest from "../WelcomeTest";
import Home from "../Home";
import About from "../About";

function Container() {
  const theme = useContext(colorContext);

  return (
    <>
      <div style={{ backgroundColor: theme }}>
        <Navbar />
        <WelcomeTest />
        <About />
        <Home />
      </div>
      ;
    </>
  );
}

export default Container;
