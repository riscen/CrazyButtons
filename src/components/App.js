import React from "react";
import Timer from "./Timer";
import MyButton from "./MyButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicksCounter: 0,
      children: null,
      disabled: false
    };
  }

  handleClick() {
    const clicksCounter = this.state.clicksCounter + 1;
    this.getNewPosition();
    this.setState({ clicksCounter: clicksCounter });
  }

  getNewPosition() {
    const gameArea = document.getElementById("game-area");
    const btn = document.getElementById("button");
    const width = gameArea.offsetWidth - btn.style.width;
    const height = gameArea.offsetHeight - btn.style.height;
    const x = Math.round(Math.random() * width);
    const y = Math.round(Math.random() * height);
    let children = {
      position: "absolute",
      left: x + "px",
      top: y + "px"
    };
    this.setState({
      children: children
    });
  }

  finishGame() {
    console.log("Finish");
    alert("You've clicked " + this.state.clicksCounter + " times!!");
    this.setState({
      disabled: true
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Crazy button</h1>
        <p>How many clicks can you do before the time runs out?</p>
        <Timer time={10} finishGame={() => this.finishGame()} />
        <h3>Total: {this.state.clicksCounter}</h3>
        <div id="game-area">
          <MyButton
            onClick={() => this.handleClick()}
            text={"Click me"}
            children={this.state.children}
            disabled={this.state.disabled}
          />
        </div>
      </div>
    );
  }
}

export default App;
