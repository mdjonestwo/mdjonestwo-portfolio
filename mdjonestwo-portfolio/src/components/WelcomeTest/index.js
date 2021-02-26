import "./Welcome.css";
import React, { Component } from "react";

export default class WelcomeTest extends Component {
  state = {
    peace: ["Yo.", "Hey!", "Greetings!", "Whats Good?", "Peace.", "Welcome."],
    peaceChoice: "Peace.",
  };

  handlePeaceClick = () => {
    var mypeace = this.state.peace;
    var showpeace = Math.floor(Math.random() * mypeace.length);
    var thisPeace = mypeace[showpeace];
    this.setState({ peaceChoice: thisPeace });
  };

  render() {
    return (
      <>
        <div className="container">
          <a
            href="#"
            className="main-greeting"
            type="button"
            onClick={this.handlePeaceClick}
          >
            {this.state.peaceChoice}
          </a>
          <h4>My name is Michael Jones,</h4>
          <h4>I am a Full Stack Web Developer.</h4>
        </div>
      </>
    );
  }
}
