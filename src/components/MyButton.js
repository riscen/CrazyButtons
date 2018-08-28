import React from "react";

class MyButton extends React.Component {
  render() {
    return (
      <button
        id="button"
        className="btn"
        onClick={this.props.onClick}
        style={this.props.children}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}

export default MyButton;
