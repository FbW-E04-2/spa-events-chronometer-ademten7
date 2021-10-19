import React, { Component } from "react";

let splitSec = 0;
let sec = 0;
let min = 0;

const timer = () => {
  splitSec++;
  if (splitSec >= 99) {
    splitSec = 0;
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
  }
};
setInterval(timer, 10);

export default class Chrono extends Component {
  state = {
    stateMin: 0,
    stateSec: 0,
    stateSplitSec: 0,
  };

  start = () => {
    this.setState({ stateSplitSec: splitSec, stateSec: sec, stateMin: min });
  };
  render() {
    return (
      <div>
        <p>
          {this.state.stateMin}:{this.state.stateSec}:{this.state.stateSplitSec}
        </p>
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}
