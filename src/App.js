import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment } from './actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.dispatch(increment());
  }

  render() {
    return (
      <div className="App">
        <p>
          {this.props.number}
        </p>
        <button onClick={this.increment}>
          Click Me!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state.number
});

export default connect(
  mapStateToProps,
)(App);
