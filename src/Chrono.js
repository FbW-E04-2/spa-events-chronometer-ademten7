import React, { Component } from "react";

export default class Chrono extends Component {
  state = {
    stateMin: 0,
    stateSec: 0,
    stateSplitSec: 0,
  };
  interval = null;
  start = () => {
    let splitSec = 0;
    let sec = 0;
    let min = 0;

    const timer = () => {
      splitSec++;
      if (splitSec >= 99) {
        splitSec = 0;
        sec++;
        if (sec >= 59) {
          sec = 0;
          min++;
        }
      }
      this.setState({ stateSplitSec: splitSec, stateSec: sec, stateMin: min });
    };
    this.interval = setInterval(timer, 10);
  };

  stop = () => {
    clearInterval(this.interval);
  };

  reset = () => {
    this.setState({ stateSplitSec: 0, stateSec: 0, stateMin: 0 });
  };
  render() {
    return (
      <div>
        <h1>React Chrono</h1>
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
