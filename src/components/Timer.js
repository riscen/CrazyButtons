import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    let time = this.state.time;
    if (this.state.time > 0) {
      this.setState({
        time: time - 1
      });
    } else {
      clearInterval(this.timerID);
      this.props.finishGame();
    }
  }

  render() {
    return (
      <div id="time-container">
        <span>Time: {this.state.time}</span>
      </div>
    );
  }
}

export default Timer;
