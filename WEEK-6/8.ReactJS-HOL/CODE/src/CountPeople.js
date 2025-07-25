// src/CountPeople.js
import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  UpdateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  UpdateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Mall Entry/Exit Counter</h1>
        <h2>People Entered: {this.state.entryCount}</h2>
        <h2>People Exited: {this.state.exitCount}</h2>
        <button onClick={this.UpdateEntry} style={{ margin: '10px', padding: '10px 20px' }}>
          Login
        </button>
        <button onClick={this.UpdateExit} style={{ margin: '10px', padding: '10px 20px' }}>
          Exit
        </button>
      </div>
    );
  }
}

export default CountPeople;
