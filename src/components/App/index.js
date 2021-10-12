import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      series: []
    }
  }

  componentDidMount() {
    const series = ['Vikings', 'Game of Thrones'];

    setTimeout(() => {
      this.setState({ 
        series: series
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
          <Intro message='Here you can find all of your most loved series' />
          The length of series array = {this.state.series.length}
        </header>
      </div>
    );
  }
}

export default App;
