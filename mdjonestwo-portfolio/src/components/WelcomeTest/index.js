import "./Welcome.css";
import React, { Component } from "react";

export default class WelcomeTest extends Component {
  state = {
    peace: ["Yo.", "Hey!", "Greetings!", "Whats Good?", "Peace.", "Welcome."],
    peaceChoice: "Peace",
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
          <h1>{this.state.peaceChoice}</h1>
          <button type="button" onClick={this.handlePeaceClick}>
            Change Greeting
          </button>
          <h4>Welcome to my website</h4>
        </div>
      </>
    );
  }
}
